#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

const float PI = 3.14159265359;

void main() { 
    vec2 coord = gl_FragCoord.xy * 2.0 - u_resolution;
    coord /= min(u_resolution.x, u_resolution.y);
    
    vec3 rColor = vec3(0.9, 0.0, 0.3);
    vec3 gColor = vec3(0.0, 0.9, 0.3);
    vec3 bColor = vec3(0.0, 0.3, 0.9);
    vec3 yColor = vec3(0.9, 0.9, 0.3);

    // # FIND y = sin(x)
    float a = sin(coord.y * 5.0 - u_time * 0.2) / 2.0;
    float b = sin(coord.y * 5.0 - u_time * 0.3) / 2.0;
    float c = sin(coord.y * 5.0 - u_time * 0.4 + PI) / 2.0;
    float d = sin(coord.y * 5.0 - u_time * 0.5 + PI) / 2.0;

    // # The greater difference between [coord.y, y], the less color value
    float e = 0.01 / abs(coord.x + a);
    float f = 0.01 / abs(coord.x + b);
    float g = 0.01 / abs(coord.x + c);
    float h = 0.01 / abs(coord.x + d);

    vec3 color = rColor * e + gColor * f + bColor * g + yColor * h;

    gl_FragColor = vec4(color, 1.0);
}