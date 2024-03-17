"use client"
import React, { useEffect, useRef } from 'react';

const SimplyAgendamientoChico = () => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.simplybook.me/v2/widget/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const handleLoad = () => {
      if (widgetContainerRef.current) {
        const widget = new window.SimplybookWidget({
          widget_type: 'iframe',
          url: 'https://mincaelectric.simplybook.me',
          theme: 'space',
          theme_settings: {
            timeline_hide_unavailable: '1',
            sb_base_color: '#111',
            hide_past_days: '0',
            timeline_show_end_time: '0',
            timeline_modern_display: 'as_slots',
            display_item_mode: 'block',
            sb_review_image: '',
            dark_font_color: '#e30613',
            light_font_color: '#ffffff',
            sb_company_label_color: '#ffffff',
            hide_img_mode: '0',
            show_sidebar: '1',
            sb_busy: '#111',
            sb_available: '#d3e0f1'
          },
          timeline: 'modern_week',
          datepicker: 'top_calendar',
          is_rtl: false,
          app_config: {
            clear_session: 1,
            allow_switch_to_ada: 0,
            predefined: {
              location: '1'
            }
          },
          container: widgetContainerRef.current
        });
      }
    };

    script.addEventListener('load', handleLoad);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="Minca" ref={widgetContainerRef}></div>;
};

export default SimplyAgendamientoChico;