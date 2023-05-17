(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window['env']['logic_url'] = '${LOGIC_URL}';
    window['env']['statemachine_url'] = '${STATEMACHINE_URL}';
    window['env']['lang_http_url'] = '${LANG_HTTP_URL}';
    window['env']['lang_ws_url'] = '${LANG_WS_URL}';
    window['env']['manual_url'] = '${MANUAL_URL}';
  })(this);