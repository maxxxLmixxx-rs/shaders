#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    vec2 translate = vec2(-0.5, -0.5);
    coord += translate;

    int numOfLights = 40; 
    for(int i = 0; i < numOfLights; i++) {
        float radius = 0.3;
        float rad = radians(360.0 / float(numOfLights)) * float(i);

        color += 0.003 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));
    }

    gl_FragColor = vec4(color, 1.0);
}