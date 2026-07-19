import React from 'react';
import { RevealText } from '../components/RevealText';
import { ArrowRight } from 'lucide-react';

export const ProjectHubPage: React.FC = () => {
    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="px-8 md:px-16 py-12 md:grid md:grid-cols-12 gap-8 items-end">
                <div className="md:col-start-3 md:col-span-8">
                    <span className="font-label uppercase tracking-widest text-xs text-secondary font-semibold">
                        Engineering Repository
                    </span>
                    <h1 className="font-['Newsreader'] text-5xl md:text-7xl text-primary font-bold tracking-tight mt-4 mb-6 leading-none flex flex-wrap gap-x-[0.25em]">
                        <RevealText text="The Project Hub" />
                    </h1>
                    <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed flex flex-wrap gap-x-[0.3em]">
                        <RevealText text="A curated collection of schematics and guided implementations. From fundamental signal processing to complex embedded systems." />
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="px-8 md:px-16 mb-12">
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="w-12 h-[1px] bg-outline-variant opacity-30"></div>
                    <button className="px-6 py-2 bg-primary text-white rounded-md text-sm font-medium shadow-lg shadow-primary/20">All Projects</button>
                    <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-md text-sm font-medium hover:bg-surface-container-highest transition-colors">Beginner</button>
                    <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-md text-sm font-medium hover:bg-surface-container-highest transition-colors">Intermediate</button>
                    <button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-md text-sm font-medium hover:bg-surface-container-highest transition-colors">Advanced</button>
                </div>
            </section>

            {/* Project Grid: Bento Layout Inspired */}
            <section className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Featured Project: Advanced */}
                <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row gap-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-bl-full -mr-10 -mt-10"></div>
                    <div className="md:w-1/2 z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-error-container text-on-error-container text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded">Advanced</span>
                            <span className="text-xs text-outline font-medium">120 Hours Est.</span>
                        </div>
                        <h3 className="font-['Newsreader'] text-3xl font-bold text-primary mb-4 leading-tight">Autonomous SLAM Mapping Rover</h3>
                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                            Implement a simultaneous localization and mapping algorithm using Lidar and ROS. This project focuses on heavy computation and real-time sensor fusion.
                        </p>
                        <div className="space-y-4 mb-8">
                            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Key Components</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">Raspberry Pi 4</span>
                                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">RPLidar A1</span>
                                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">Teensy 4.1</span>
                                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">IMU MPU9250</span>
                            </div>
                        </div>
                        <button className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-md text-sm font-semibold group-hover:scale-[1.02] transition-transform">
                            View Project Guide
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="md:w-1/2 aspect-video rounded-lg overflow-hidden bg-surface-container shadow-inner">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGA1uq3ruIIcoxef8h5f4sfzYzHummd60OlTkxSmiCoVED6TzQv_OwmMwUgeaJ1qE4NJfO-4QRm5uiRm4eX1pufElsEwJXNxnOu36jP6Xz3dbnUcQIIaSD1PZYuLhtuH33lW6jMb1rmG17NK1Lekqg1BpseWBlEk6ucA-KYUZv2bUhWClOysFyDFaeCHfJTukVKy5uo1ZEz0MxaVW_1tdAFO9x_EBSg5Mfkr3jZxj7XZhNKlvT_f7KFIGUk9WAfv39AO075_asy-eH" 
                            alt="Robot Rover" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                        />
                    </div>
                </div>

                {/* Side Card: Beginner */}
                <div className="md:col-span-4 bg-secondary-container/30 p-8 rounded-xl flex flex-col border border-secondary-container/50">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded">Beginner</span>
                    </div>
                    <h3 className="font-['Newsreader'] text-2xl font-bold text-primary mb-4">Smart Garden Monitor</h3>
                    <p className="text-on-secondary-container/80 text-sm mb-6 leading-relaxed">
                        Learn the basics of I2C and analog-to-digital conversion by building an automated plant care system with WiFi notifications.
                    </p>
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">ESP32</span>
                            <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant text-xs rounded-full">Capacitive Soil Sensor</span>
                        </div>
                        <button className="w-full bg-surface-container-lowest text-primary py-3 rounded-md text-sm font-bold hover:bg-white transition-colors">
                            View Project Guide
                        </button>
                    </div>
                </div>

                {/* Regular Card: Intermediate */}
                <div className="md:col-span-4 bg-surface-container-low p-6 rounded-xl flex flex-col group">
                    <div className="aspect-video w-full rounded-lg mb-6 overflow-hidden bg-surface-container-high">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASwDwYzeqL99IxLNLovNcst0q_sIqVlQ7LchFNt97wpjfXuIXExJ02G-vBA-rUdGowM0RNyyBUPOMlSj7LeA3fTuw7-uIxAPrb8-PL8Zf4fd5zz_vIg0T4U2jyZUr-fFziTr5nqPAoDuhnOkIe62ihkLzycwZumwvQU45ABW9LXk4J2gIOH2lwP7T90fA9oLzGl0_-1cMJhv2jrSVD7nxJYKSffa5327XRjQAAIenrKXN5Distx8kAoVR99aw3Aocr46wLOz8zOdMD" 
                            alt="Oscilloscope Screen" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded">Intermediate</span>
                    </div>
                    <h3 className="font-['Newsreader'] text-xl font-bold text-primary mb-3">Low-Noise Pre-Amp</h3>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                        High-fidelity audio amplification circuit utilizing ultra-low distortion op-amps and precision metal film resistors.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-[10px] text-outline px-2 py-1 bg-surface-container-highest rounded">OPA2134</span>
                        <span className="text-[10px] text-outline px-2 py-1 bg-surface-container-highest rounded">Bipolar PSU</span>
                    </div>
                    <button className="mt-auto text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Schematic <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Regular Card: Intermediate */}
                <div className="md:col-span-4 bg-surface-container-low p-6 rounded-xl flex flex-col group">
                    <div className="aspect-video w-full rounded-lg mb-6 overflow-hidden bg-surface-container-high">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSu08fZgzWXe7V4oewfwGbzhq6OYygVPmM55ehj5MLGEn2PyvVl2IyhQVavgIJSB8RVN-OHuE-uknLbDizhbA_9MGr6fm3M4nuzsYyxCt6KUDagDoFw_rLPslVqBmz3076jD6Tg93dsDVhOvTsQ54c4oPX27gL9WyVYw4aF2wvplCH3Qiwp1ykxewvzc064212dm5tu73pMQTOEWcewoxR0aIUxsRWCuJBPa11_-33Trlh8n02UEY-DLDd9Ss6s6bNqXML906Ui9Vd" 
                            alt="Arduino Board" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded">Intermediate</span>
                    </div>
                    <h3 className="font-['Newsreader'] text-xl font-bold text-primary mb-3">CAN Bus Data Logger</h3>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                        Sniff and log automotive telemetry data onto an SD card for vehicle performance analysis and tuning.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-[10px] text-outline px-2 py-1 bg-surface-container-highest rounded">Arduino Nano</span>
                        <span className="text-[10px] text-outline px-2 py-1 bg-surface-container-highest rounded">MCP2515</span>
                    </div>
                    <button className="mt-auto text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Schematic <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Regular Card: Beginner */}
                <div className="md:col-span-4 bg-surface-container-low p-6 rounded-xl flex flex-col group">
                    <div className="aspect-video w-full rounded-lg mb-6 overflow-hidden bg-surface-container-high">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD64o_y2U2nXOTrT_mNuwNgtmjcJTF-s2Trg0AA_1EEnOVcNS2EeUllrmPoc0BBB44YvRYeG0i8VwIRO3_T_JI85KNY1HQqgF0OZWr25moFTJb-_gDt8jT-C7rhmwZwFoNFXcbW2GnCXrQV7hILoBpg22Smbhn3FC2xC5YrdyU_UoZxc8YsBW4TjWHnQKUO4oJo0g3LXJmXyAwMCTc4gTEJs3Dj48v_EwVqQPAzrsuf6PLrc4H_5ecGEv6MX5yIIFqTU-MxJROFnTQ9" 
                            alt="LED components" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] uppercase font-bold tracking-tighter px-2 py-0.5 rounded">Beginner</span>
                    </div>
                    <h3 className="font-['Newsreader'] text-xl font-bold text-primary mb-3">Binary Clock Display</h3>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                        A fundamental project using shift registers to drive a 4x4 matrix of LEDs to represent time in binary format.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-[10px] text-outline px-2 py-1 bg-surface-container-highest rounded">74HC595</span>
                        <span className="text-[10px] text-outline px-2 py-1 bg-surface-container-highest rounded">RTC DS3231</span>
                    </div>
                    <button className="mt-auto text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Schematic <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </section>
        </div>
    );
};
