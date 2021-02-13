#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

uniform sampler2D u_tex0;

float amount = 0.6;

float random2D(vec2 coord) {
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() { // glslViewer -l tutorial/026_image.frag image.jpg 
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec4 image = texture2D(u_tex0, coord);
    
    float noise = (random2D(coord) - 0.5) * amount;
    
    image.rgb += noise;

    // image.r += noise;
    // image.g += noise;
    // image.b += noise;

    gl_FragColor = image;
}