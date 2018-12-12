export default `
precision highp float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uTime;

void main () {
  vec2 uv1 = vec2(vUv.s + uTime, vUv.t + uTime);
  vec4 displace = texture2D(uDisplacementMap, uv1);

  float displacement = displace.g * 0.2;
  vec2 uv2 = vec2(vUv.x + displacement, vUv.y + displacement);

  gl_FragColor = texture2D(uTexture, uv2);
}
`
