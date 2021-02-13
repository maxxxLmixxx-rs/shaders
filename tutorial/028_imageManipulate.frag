#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_tex0;

void main() { // glslViewer -l tutorial/026_image.frag image.jpg 
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec4 image = texture2D(u_tex0, coord);
    image.r += sin(coord.x * 90.);
    image.r += cos(coord.y * 90.);

    gl_FragColor = image;
}