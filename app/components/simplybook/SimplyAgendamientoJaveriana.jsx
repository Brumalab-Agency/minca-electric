"use client"
import React, { useEffect, useRef } from 'react';

function SimplyAgendamientoJaveriana() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.me/v2/widget/widget.js";
        script.onload = () => {
            new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/mincaelectric.simplybook.me","theme":"space","theme_settings":{"timeline_hide_unavailable":"1","sb_base_color":"#e30613","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","display_item_mode":"block","body_bg_color":"#ffffff","sb_review_image":"","dark_font_color":"#e30613","light_font_color":"#ffffff","btn_color_1":"#e30613","sb_company_label_color":"#ffffff","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern_week","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":1,"allow_switch_to_ada":0,"predefined":{"location":"6"}},"container_id":"sbw_n2w64k"});
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
       <div id="sbw_n2w64k" ref={widgetContainerRef}></div>
    );
}

export default SimplyAgendamientoJaveriana;
