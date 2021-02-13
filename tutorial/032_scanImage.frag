#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

uniform sampler2D u_tex0;

float size  = 6.0;
float speed = 10.0;

bool flip = false;

void main() { // same size blocks int[] ->  
              // glslViewer -l tutorial/026_image.frag image.jpg 
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec4 image = texture2D(u_tex0, coord);
    
    if (flip) {
        image.a = sin( floor(coord.x * size) - u_time * speed );
    } else {
        image.a = sin( floor(coord.y * size) - u_time * speed );
    } 
    
    gl_FragColor = image;
}