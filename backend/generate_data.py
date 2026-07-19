import json

def generate_curriculum_data():
    course_data = {
        "name": "B.Tech Electronics Eng",
        "children": [
            {
                "name": "First Year",
                "children": [
                    {
                        "name": "Semester 1",
                        "children": [
                            {"name": "English for Technical Communication", "metadata": {"Credits": 3, "L": 2, "T": 0, "P": 2, "H": 4}},
                            {"name": "Mathematics - I", "metadata": {"Credits": 4, "L": 3, "T": 1, "P": 0, "H": 4}},
                            {"name": "Semiconductor Physics", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Programming for Problem Solving", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Basic Electronics", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Idea Lab Workshop", "metadata": {"Credits": 1, "L": 0, "T": 0, "P": 2, "H": 2}}
                        ]
                    },
                    {
                        "name": "Semester 2",
                        "children": [
                            {"name": "Universal Human Values", "metadata": {"Credits": 2, "L": 1, "T": 0, "P": 2, "H": 3}},
                            {"name": "Mathematics - II", "metadata": {"Credits": 4, "L": 3, "T": 1, "P": 0, "H": 4}},
                            {"name": "Test and Measurement Tools", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Semiconductor Devices", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Python Programming", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Computer Aided Circuit Drawing", "metadata": {"Credits": 1, "L": 0, "T": 0, "P": 2, "H": 2}},
                            {"name": "Micro Project", "metadata": {"Credits": 1, "L": 0, "T": 0, "P": 2, "H": 2}},
                            {"name": "Environmental Science", "metadata": {"Credits": 0, "L": 2, "T": 0, "P": 0, "H": 2}}
                        ]
                    }
                ]
            },
            {
                "name": "Second Year",
                "children": [
                    {
                        "name": "Semester 3",
                        "children": [
                            {"name": "Electromagnetic Waves", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Analog Circuits", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Digital Logic Design", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Signals and Systems", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Network Analysis", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Economics and Management", "metadata": {"Credits": 3, "L": 3, "T": 0, "P": 0, "H": 3}}
                        ]
                    },
                    {
                        "name": "Semester 4",
                        "children": [
                            {"name": "Mathematics - III", "metadata": {"Credits": 4, "L": 3, "T": 1, "P": 0, "H": 4}},
                            {"name": "Analog Integrated Circuit", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Microcontrollers", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Analog and Digital Communication", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Control Systems", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Mini Project", "metadata": {"Credits": 1, "L": 0, "T": 0, "P": 2, "H": 2}},
                            {"name": "Internship-I (2 weeks during vacation)", "metadata": {"Credits": 0, "L": 0, "T": 0, "P": 0, "H": 0}}
                        ]
                    }
                ]
            },
            {
                "name": "Third Year",
                "children": [
                    {
                        "name": "Semester 5",
                        "children": [
                            {"name": "Probability Theory and Stochastic Processes", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Embedded Systems", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Industrial Automation", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "VLSI Design", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Guided Research and Reading on Indian Knowledge System", "metadata": {"Credits": 1, "L": 0, "T": 0, "P": 2, "H": 1}},
                            {"name": "Open Elective - I*", "metadata": {"Credits": 3, "L": 3, "T": 0, "P": 0, "H": 3}}
                        ]
                    },
                    {
                        "name": "Semester 6",
                        "children": [
                            {"name": "Digital Signal Processing", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "HDL based Digital System Design", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Antennas Wave Propagation", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Electronics System Design Laboratory", "metadata": {"Credits": 1, "L": 0, "T": 0, "P": 2, "H": 2}},
                            {"name": "Guided Research Reading for Modern Engineering", "metadata": {"Credits": 1, "L": 0, "T": 0, "P": 2, "H": 2}},
                            {"name": "Program Elective - I", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Open Elective - II*", "metadata": {"Credits": 3, "L": 3, "T": 0, "P": 0, "H": 3}}
                        ]
                    }
                ]
            },
            {
                "name": "Fourth Year",
                "children": [
                    {
                        "name": "Semester 7",
                        "children": [
                            {"name": "Power Electronics & Drives", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Internet of Things (IoT) and Machine Learning (ML)", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Wireless Communication", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Computer Networks", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                            {"name": "Project-I", "metadata": {"Credits": 4, "L": 0, "T": 0, "P": 8, "H": 8}},
                            {"name": "Program Elective - II", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}}
                        ]
                    },
                    {
                        "name": "Semester 8",
                        "children": [
                            {
                                "name": "Scheme A",
                                "children": [
                                    {"name": "Program Elective - III", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                                    {"name": "Program Elective - IV", "metadata": {"Credits": 4, "L": 3, "T": 0, "P": 2, "H": 5}},
                                    {"name": "Project-II", "metadata": {"Credits": 10, "L": 0, "T": 0, "P": 20, "H": 20}}
                                ]
                            },
                            {
                                "name": "Scheme B",
                                "children": [
                                    {"name": "Industry Defined Project/training", "metadata": {"Credits": 18, "L": 0, "T": 0, "P": 36, "H": 36}}
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    
    with open("curriculum_data.json", "w") as f:
        json.dump([course_data], f, indent=4)
        
    print("curriculum_data.json generated successfully with exact official names!")

if __name__ == "__main__":
    generate_curriculum_data()