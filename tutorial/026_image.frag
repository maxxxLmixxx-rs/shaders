#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

uniform sampler2D u_tex0;

void main() { // glslViewer -l tutorial/026_image.frag image.jpg 
    vec2 coord = gl_FragCoord.xy / u_resolution; 
    coord.x += sin(u_time);
    gl_FragColor = texture2D(u_tex0, coord);
}