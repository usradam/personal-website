import { marked } from "marked";

const markdown = `
<table>
    <tr>
        <td style="text-align:center;">
            <span id="browser-info"></span> •
            <span id="current-time"></span> •
            <span id="window-dimensions"></span>
        </td>
    </tr>
</table>
`;

document.querySelector("#footer").innerHTML = marked.parse(markdown);

// 1. Get current time
function updateTime() {
  const now = new Date();
  document.getElementById('current-time').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
    
// 2. Get browser info
function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'Unknown';
}
document.getElementById('browser-info').textContent = `Browser: ${getBrowser()}`;

// 3. Get window dimensions
function updateDimensions() {
  const dims = `${window.innerWidth}x${window.innerHeight}`;
  document.getElementById('window-dimensions').textContent = `Dimensions: ${dims}`;
}
window.addEventListener('resize', updateDimensions);
updateDimensions();