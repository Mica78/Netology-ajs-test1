export function getHealth(obj) {
    if (obj.health > 50) {
        return 'healthy';
    } else if (obj.health <= 50 && obj.health >= 15) {
        return 'wounded';
    }
    return 'critical';
}
