import { generateConfig } from "./snap";

// 静态的数值测试
// test('测试generateConfig函数',() => {
//   expect(generateConfig()).toEqual( {
//     server: 'http://localhost',
//     port: 8080,
//   })
// })

// 动态的数值测试
test("测试generateConfig函数", () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date)
  });
});

// 行内快照 需要安装prettier
test("测试generateConfig函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "port": 8082,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  ` 
  );
});
