#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

uniform sampler2D u_tex0;

void main() { // translate on resize: 1x1 -> 5x1
              // glslViewer -l tutorial/026_image.frag image.jpg 
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec4 image = texture2D(u_tex0, coord);
    // image += vec4(0.3, sin(u_time), 0.0, 1.0);
    image += vec4(0.3, 0.2, 0.0, 1.0);
 
    gl_FragColor = image;
}