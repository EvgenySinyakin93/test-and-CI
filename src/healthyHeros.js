export default function healthyHeros(stufe) {
    if (stufe.healthy > 50) {
        return "healthy";
    } else if(stufe.healthy >= 15 && stufe.healthy <= 50) {
        return "wounded";   
    } else {
        return "critical";
    }
}