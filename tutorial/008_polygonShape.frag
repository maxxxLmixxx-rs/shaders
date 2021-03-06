#ifdef GL_ES
    precision mediump float;
#endif

const float PI = 3.14159265359;
uniform vec2 u_resolution;

float polygonShape(vec2 position, float radius, float sides) {
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;
    return step(radius, cos( floor(0.5 + angle / slice) * slice - angle ) * length(position));
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution;
    float polygon = polygonShape(position, 0.6, 6.0);
    vec3 color = vec3(step(0.5, position.x) * step(0.5, position.y));
    
    gl_FragColor = vec4(vec3(polygon), 1.0);
}