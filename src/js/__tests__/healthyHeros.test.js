import healthyHeros from '../healthyHeros';

test("healthy", () => {
    const stufe = {
        name: "Маг", 
        healthy: 90
    }
    const result = healthyHeros(stufe);
    expect(result).toBe("healthy");
})

test("wounded", () => {
    const stufe = {
        name: "Маг", 
        healthy: 40
    }
    const result = healthyHeros(stufe);
    expect(result).toBe("wounded");
})

test("critical", () => {
    const stufe = {
        name: "Маг", 
        healthy: 5
    }
    const result = healthyHeros(stufe);
    expect(result).toBe("critical");
})