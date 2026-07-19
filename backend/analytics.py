import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Config
st.set_page_config(page_title="Curriculum Analytics", layout="wide", initial_sidebar_state="collapsed")

# Custom CSS
st.markdown("""
<style>
    /* Global styles */
    .stApp {
        background-color: #fbf9f6;
        color: #1b1c1a;
    }
    
    h1, h2, h3, h4, h5, h6 {
        color: #15236d !important;
    }
    
    /* Hide Streamlit elements */
    #MainMenu {visibility: hidden;}
    header {visibility: hidden;}
    footer {visibility: hidden;}
    
    /* Card aesthetics */
    [data-testid="stMetricValue"] {
        color: #15236d;
    }
</style>
""", unsafe_allow_html=True)

# Data
data = {
    'Semesters': ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8'],
    'Credits': [20, 20, 23, 21, 20, 21, 24, 18],
    'Lecture Hours': [14, 15, 18, 15, 17, 15, 15, 6],
    'Practical Hours': [10, 12, 10, 10, 10, 12, 18, 24]
}

df = pd.DataFrame(data)

st.title("Curriculum Analytics")

# Summary Statistics with Numpy
total_credits = np.sum(df['Credits'])
avg_practical_hours = np.mean(df['Practical Hours'])
max_lecture_hours = np.max(df['Lecture Hours'])

col1, col2, col3 = st.columns(3)
with col1:
    st.metric(label="Total Credits", value=int(total_credits))
with col2:
    st.metric(label="Avg Practical Hours/Sem", value=f"{avg_practical_hours:.1f}")
with col3:
    st.metric(label="Max Lecture Hours/Sem", value=int(max_lecture_hours))

st.markdown("---")

col_left, col_right = st.columns(2)

with col_left:
    st.subheader("Credit Distribution by Semester")
    # Seaborn bar chart
    fig_bar, ax_bar = plt.subplots(figsize=(8, 5))
    fig_bar.patch.set_facecolor('#fbf9f6')
    ax_bar.set_facecolor('#fbf9f6')
    
    sns.barplot(data=df, x='Semesters', y='Credits', color='#15236d', ax=ax_bar)
    ax_bar.set_ylabel("Credits", color='#1b1c1a')
    ax_bar.set_xlabel("Semester", color='#1b1c1a')
    ax_bar.tick_params(colors='#1b1c1a')
    for spine in ax_bar.spines.values():
        spine.set_color('#1b1c1a')
    ax_bar.spines['top'].set_visible(False)
    ax_bar.spines['right'].set_visible(False)
    st.pyplot(fig_bar)

with col_right:
    st.subheader("Lecture vs. Practical Hours")
    # Matplotlib line chart
    fig_line, ax_line = plt.subplots(figsize=(8, 5))
    fig_line.patch.set_facecolor('#fbf9f6')
    ax_line.set_facecolor('#fbf9f6')
    
    ax_line.plot(df['Semesters'], df['Lecture Hours'], marker='o', label='Lecture Hours', color='#5b21b6', linewidth=2)
    ax_line.plot(df['Semesters'], df['Practical Hours'], marker='s', label='Practical Hours', color='#0ea5e9', linewidth=2)
    
    ax_line.set_ylabel("Hours / Week", color='#1b1c1a')
    ax_line.set_xlabel("Semester", color='#1b1c1a')
    ax_line.tick_params(colors='#1b1c1a')
    for spine in ax_line.spines.values():
        spine.set_color('#1b1c1a')
    ax_line.legend(facecolor='#fbf9f6', edgecolor='#1b1c1a', labelcolor='#1b1c1a')
    ax_line.grid(True, linestyle='--', alpha=0.3, color='#1b1c1a')
    ax_line.spines['top'].set_visible(False)
    ax_line.spines['right'].set_visible(False)
    st.pyplot(fig_line)
