###类型 
	string number boolean null undefined object function array any(任意类型) never(到达不了重点即出错死循环。) void (空值 function 返回为undefind or null)
	(1)	类型断言 两种方式 （确定类型不需要ts 检查）1. (<string>someValue) 2. as 语法(someValue as string ) as 语法适用于尖括号被特别解析 如:jsx
	(2)  定义变量与js 相同 及作用域 var let const  
	(3)	接口 命名大驼峰命名 第三方代码定义契约 地址传入 规定值类型 function (lab : {label : string }){}  interface 接口 定义公用 接口 interface  labelValue {}
	interface 属性名加? 可选属性  只读属性 readonly x: number 函数参数后面跟 格式 是返回值的属性
	(4)  只读数组 关键字ReadonlyArray  readonly vs const  前者是属性 后者是变量
	(5) 额外的属性 在给函数传参的时候 当我们使用字面量传参有额外属性时 会发生错误 怎么绕过错误那 意识断言 <xx>  as xx  或者interface { [propName:string] :any}
	(6) 函数类型 interface 注入一个多类型 (x：number ,y:string)<=参数 : boolean<= 返回值类型
	(7) 可索引的类型 

	(8) 类 实例 声明类型 必须是直接构造函数类名let dog :Animal =  new Animal();
		公共私有 与保护的修饰符公开的(实例使用) public  private 私有 自身使用 
		private 静态使用在类中可见 都绑定在this (实例上)  不能在生成后访问
		“兼容性”  可见223行 继承 或者自身实例 所产生的 private 在同一处 所以属于同一类型可以赋值， 如果是别的实例 如 {} 不能使用 即使 他又private  name 属性  不是同一处打造的name  所以 不可以赋值 (兼容性)
		protected 受保护的 实例 子类可以访问  其他不允许访问
	(9)	readonly 修饰符
		使用readonly 关键字将属性设置为只读。 只读属性必须在声明时或构造函数里被初始化。