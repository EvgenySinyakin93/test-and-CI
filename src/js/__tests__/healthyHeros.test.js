import { healthyHeros } from '../src/healthyHeros.js';

test('healthy', () => {
    const stufe = {
        name: "Маг", 
        health: 90
    }
    const result = healthyHeros(stufe);
    expect(result).toBe("healthy");
})

test("wounded", () => {
    const stufe = {
        name: "Маг", 
        health: 40
    }
    const result = healthyHeros(stufe);
    expect(result).toBe("wounded");
})

test("critical", () => {
    const stufe = {
        name: "Маг", 
        health: 5
    }
    const result = healthyHeros(stufe);
    expect(result).toBe("critical");
})