describe("we want to test if the user entered 3 letters",()=>{
    test("we want to test all 3 characters",()=>{
        const Text = data.Text;
        const text = "Cat";
        expect(Text).toBe(text);

    })
})
describe("we want to test if the user uses a shape",()=>{
    test("we want to test if the user chooses circle, squre , or a triangle",()=>{
        const Shape = data.shape;
        const shape = "square";
        expect(Shape).toBe(shape);

    })
})
describe("we want to test if the user uses the color of the shape",()=>{
    test("we want to test if the user chooses white, red , or blue",()=>{
        const Color = data.shapeColor;
        const color = "red";
        expect(Color).toBe(color);

    })
})
describe("we want to test if the user choses the color of the text",()=>{
    test("we want to test if the user chooses white, red , or blue",()=>{
        const Testcolor = data.textColor;
        const testcolor = "red";
        expect(Testcolor).toBe(testcolor);

    })
})
describe("we want to test if the logo is created",()=>{
    test("we want to test if the logo is created",()=>{
        const Logo = data.logo;
        const logo= "logo.svg";
        expect(Testlogo).toBe(Testlogo);

    })
})