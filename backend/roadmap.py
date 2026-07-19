import streamlit as st
import json
import matplotlib.pyplot as plt
import seaborn as sns
from streamlit_echarts import st_echarts

sns.set_theme(style="darkgrid")
st.set_page_config(layout="wide", page_title="Electronics Eng. Roadmap")

@st.cache_data
def load_data():
    with open("curriculum_data.json", "r") as f:
        data = json.load(f)[0] # Root node is a list of size 1
    return data

try:
    tree_data = load_data()
except FileNotFoundError:
    st.error("Please run `python generate_data.py` first to create curriculum_data.json")
    st.stop()

# --- NEW COLOR CODING LOGIC ---
CATEGORY_COLORS = {
    "Core Subject": "#5470c6",    # Blue
    "Elective": "#91cc75",        # Green
    "Project/Research": "#fac858",# Yellow
    "Lab/Practical": "#ee6666",   # Red
    "Mathematics": "#73c0de",     # Light Blue
    "Root/Semester": "#333333"    # Dark Grey
}

def determine_category(name, metadata):
    name_lower = name.lower()
    if "elective" in name_lower:
        return "Elective"
    elif "project" in name_lower or "research" in name_lower or "internship" in name_lower:
        return "Project/Research"
    elif "lab" in name_lower or "drawing" in name_lower or (metadata.get("L") == 0 and metadata.get("P", 0) > 0):
        return "Lab/Practical"
    elif "mathematics" in name_lower or "math" in name_lower:
        return "Mathematics"
    else:
        return "Core Subject"

def inject_colors(node):
    # If the node has metadata, it's a subject. Assign a category and color.
    if "metadata" in node:
        category = determine_category(node["name"], node["metadata"])
        node["category"] = category 
        color = CATEGORY_COLORS[category]
        node["itemStyle"] = {
            "color": color,
            "borderColor": color
        }
    else:
        # These are the Semester and Scheme folders
        node["category"] = "Root/Semester"
        color = CATEGORY_COLORS["Root/Semester"]
        node["itemStyle"] = {
            "color": "white", 
            "borderColor": color,
            "borderWidth": 2
        }

    # Recurse through children
    if "children" in node:
        for child in node["children"]:
            inject_colors(child)

# Run the color injection before passing data to ECharts
inject_colors(tree_data)
# ------------------------------

st.title("Electronics Engineering B.Tech Roadmap")
st.markdown("Navigate through your degree timeline. **Click on any subject** to view analytics!")

# --- NEW VISUAL LEGEND ---
cols = st.columns(len(CATEGORY_COLORS))
for col, (cat, color) in zip(cols, CATEGORY_COLORS.items()):
    # Skip rendering the root/semester legend as it's self-explanatory
    if cat != "Root/Semester":
        col.markdown(f"<div style='display:flex; align-items:center;'><div style='width:12px; height:12px; background-color:{color}; border-radius:50%; margin-right:8px;'></div><small><b>{cat}</b></small></div>", unsafe_allow_html=True)
st.markdown("---")

# 2:1 ratio for flowchart vs analytics
col1, col2 = st.columns([2, 1])

with col1:
    st.markdown("### Interactive Curriculum")
    options = {
        "tooltip": {
            "trigger": "item",
            "triggerOn": "mousemove",
            # Updated tooltip to show the category
            "formatter": "function(info) { var data = info.data; if(data.metadata) { return '<b>' + data.name + '</b><br/>Category: ' + data.category + '<br/>Credits: ' + data.metadata.Credits; } return data.name; }"
        },
        "series": [
            {
                "type": "tree",
                "data": [tree_data],
                "left": "10%",
                "right": "20%",
                "top": "5%",
                "bottom": "5%",
                "symbol": "circle", # Changed from 'emptyCircle' so the color fills the node
                "symbolSize": 14,
                "orient": "horizontal", 
                "expandAndCollapse": True,
                "initialTreeDepth": 1, 
                "label": {
                    "position": "left",
                    "verticalAlign": "middle",
                    "align": "right",
                    "fontSize": 14,
                },
                "leaves": {
                    "label": {
                        "position": "right",
                        "verticalAlign": "middle",
                        "align": "left",
                        "fontSize": 12
                    }
                },
                "animationDurationUpdate": 750
            }
        ]
    }
    
    events = {
        "click": "function(params) { return params.data; }"
    }
    
    selected_node = st_echarts(options=options, events=events, height="800px", key="echarts")

with col2:
    st.markdown("### Analytics Dashboard")
    if selected_node and "metadata" in selected_node:
        subj_name = selected_node["name"]
        metadata = selected_node["metadata"]
        category = selected_node.get("category", "Core Subject")
        
        # --- NEW DASHBOARD BANNER MATCHING NODE COLOR ---
        color = CATEGORY_COLORS.get(category, "#5470c6")
        st.markdown(f"<div style='padding:12px; background-color:{color}15; border-left: 6px solid {color}; border-radius:5px; margin-bottom:15px;'><b>Selected Subject:</b> {subj_name} <br> <small style='color:gray;'><i>{category}</i></small></div>", unsafe_allow_html=True)
        
        c = metadata["Credits"]
        l, t, p, h = metadata["L"], metadata["T"], metadata["P"], metadata["H"]
        
        st.markdown(f"**Credits:** {c} | **Total Hours (H):** {h}")
        st.markdown(f"*L: {l} | T: {t} | P: {p}*")
        
        st.markdown("##### Hour Distribution")
        
        labels = []
        sizes = []
        colors_map = {"Lecture (L)": "#4c72b0", "Tutorial (T)": "#55a868", "Practical (P)": "#dd8452"}
        pie_colors = []
        
        if l > 0:
            labels.append("Lecture (L)")
            sizes.append(l)
            pie_colors.append(colors_map["Lecture (L)"])
        if t > 0:
            labels.append("Tutorial (T)")
            sizes.append(t)
            pie_colors.append(colors_map["Tutorial (T)"])
        if p > 0:
            labels.append("Practical (P)")
            sizes.append(p)
            pie_colors.append(colors_map["Practical (P)"])
            
        if sizes:
            fig_pie, ax_pie = plt.subplots(figsize=(4, 4))
            fig_pie.patch.set_alpha(0.0) 
            ax_pie.patch.set_alpha(0.0)
            
            text_color = "white" if sns.axes_style()["axes.facecolor"] == "dark" else "black"
            
            ax_pie.pie(sizes, labels=labels, autopct='%1.1f%%', 
                       startangle=90, colors=pie_colors, 
                       textprops={'color': text_color})
            ax_pie.axis('equal') 
            st.pyplot(fig_pie)
        else:
            st.warning("No hours configured for this subject.")
            
    elif selected_node:
        st.info(f"Expanded node: **{selected_node.get('name', 'Unknown')}**\n\nSelect a specific *Subject* to view its analytics.")
    else:
        st.info("Click on a Subject in the flowchart to view its analytics.")