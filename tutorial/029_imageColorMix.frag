#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_tex0;

void main() { // glslViewer -l tutorial/026_image.frag image.jpg 
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec4 image = texture2D(u_tex0, coord);
    vec3 color = vec3(0.0);

    // ...
    
    color = mix(color, image.rgb, 0.5);
    // color = mix(color, image.rgb, image.a);
    gl_FragColor = vec4(color, 1.0);
}