/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ref : https://github.com/AlloyTeam/eslint-config-alloy
 * @format
 */

module.exports = {
  env: {
    es6: true,
  },

  parserOptions: {
    sourceType: 'module',
  },

  extends: [
    'plugin:prettier/recommended', // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'prettier',
  ],

  plugins: ['eslint-comments', 'react', 'react-hooks', 'react-native', '@react-native-community', 'jest'],

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      plugins: ['flowtype'],
      rules: {
        // Flow Plugin
        // The following rules are made available via `eslint-plugin-flowtype`
        'flowtype/define-flow-type': 1,
        'flowtype/use-flow-type': 1,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'react/sort-comp': 'off',
        /**
         * 重载的函数必须写在一起
         * @reason 增加可读性
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        /**
         * 限制数组类型必须使用 Array<T> 或 T[]
         * @reason 允许灵活运用两者
         */
        '@typescript-eslint/array-type': 'off',
        /**
         * 禁止对没有 then 方法的对象使用 await
         */
        '@typescript-eslint/await-thenable': 'off',
        /**
         * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
         * @reason 这种注释本身就是对特殊代码的说明
         */
        '@typescript-eslint/ban-ts-comment': 'off',
        /**
         * 禁止使用类似 tslint:disable-next-line 这样的注释
         */
        '@typescript-eslint/ban-tslint-comment': 'off',
        /**
         * 禁止使用指定的类型
         */
        '@typescript-eslint/ban-types': 'off',
        /**
         * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
         */
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        /**
         * 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
         */
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        /**
         * 随便你使用type还是interface
         * @reason interface 可以 implement, extend 和 merge , type可以强制规定轮廓
         */
        '@typescript-eslint/consistent-type-definitions': 'off',
        /**
         * 必须使用 import type 导入类型
         */
        '@typescript-eslint/consistent-type-imports': 'off',
        /**
         * 有默认值或可选的参数必须放到最后
         */
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'off',
        /**
         * 禁止使用 foo['bar']，必须写成 foo.bar
         * @reason 当需要写一系列属性的时候，可以更统一
         */
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'off',
        /**
         * 函数返回值必须与声明的类型一致
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/explicit-function-return-type': 'off',
        /**
         * 设置类的成员的可访问性是一个好习惯，但是mobx的store会很麻烦
         * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
         */
        '@typescript-eslint/explicit-member-accessibility': 'off',
        /**
         * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
         */
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        /**
         * 变量必须在定义的时候赋值
         */
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',
        /**
         * 类的成员之间是否需要空行
         * @reason 有时为了紧凑需要挨在一起，有时为了可读性需要空一行
         */
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        /**
         * 指定类成员的排序规则
         * @reason 优先级：
         * 1. static > instance
         * 2. field > constructor > method
         * 3. public > protected > private
         */
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'static-field',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'static-method',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'public-field',
              'protected-field',
              'private-field',
              'instance-field',
              'field',
              'constructor',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              'public-method',
              'protected-method',
              'private-method',
              'instance-method',
              'method',
            ],
          },
        ],
        /**
         * 接口中的方法必须用属性的方式定义
         * @reason 配置了 strictFunctionTypes 之后，用属性的方式定义方法可以获得更严格的检查
         */
        '@typescript-eslint/method-signature-style': 'error',
        /**
         * 限制各种变量或类型的命名规则
         */
        '@typescript-eslint/naming-convention': 'off',
        /**
         * 禁止使用 Array 构造函数
         */
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'off',
        /**
         * 禁止滥用 toString 方法
         */
        '@typescript-eslint/no-base-to-string': 'off',
        /**
         * 禁止使用容易混淆的非空断言
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 'off',
        /**
         * 禁止使用返回值为 void 的函数的返回值
         */
        '@typescript-eslint/no-confusing-void-expression': 'off',
        /**
         * 禁止重复定义类的成员
         * @reason 编译阶段就会报错了
         */
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'off',
        /**
         * 禁止重复导入模块
         */
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',
        /**
         * 禁止 delete 时传入的 key 是动态的
         */
        '@typescript-eslint/no-dynamic-delete': 'off',
        /**
         * 不允许有空函数
         * @reason 有时需要将一个空函数设置为某个项的默认值
         */
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        /**
         * 禁止定义空的接口
         */
        '@typescript-eslint/no-empty-interface': 'error',
        /**
         * 禁止使用 any
         */
        '@typescript-eslint/no-explicit-any': 'off',
        /**
         * 禁止多余的 non-null 断言
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'off',
        /**
         * 禁止定义没必要的类，比如只有静态方法的类
         */
        '@typescript-eslint/no-extraneous-class': 'off',
        /**
         * 禁止调用 Promise 时没有处理异常情况
         */
        '@typescript-eslint/no-floating-promises': 'off',
        /**
         * 禁止对 array 使用 for in 循环
         */
        '@typescript-eslint/no-for-in-array': 'off',
        /**
         * catch 的参数必须指定具体类型
         */
        '@typescript-eslint/no-implicit-any-catch': 'off',
        /**
         * 禁止使用 eval
         */
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        /**
         * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
         * @reason 可以简化代码
         */
        '@typescript-eslint/no-inferrable-types': 'error',
        /**
         * 禁止在类之外的地方使用 this
         * @reason 只允许在 class 中使用 this
         */
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        /**
         * 禁止使用无意义的 void 类型
         * @reason void 只能用在函数的返回值中
         */
        '@typescript-eslint/no-invalid-void-type': 'error',
        /**
         * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
         * @reason 使用 let 就已经解决了这个问题了
         */
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        /**
         * 禁止使用超出 js 精度范围的数字
         */
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        /**
         * 禁止使用 magic numbers
         */
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        /**
         * 禁止在接口中定义 constructor，或在类中定义 new
         */
        '@typescript-eslint/no-misused-new': 'off',
        /**
         * 避免错误的使用 Promise
         */
        '@typescript-eslint/no-misused-promises': 'off',
        /**
         * 禁止使用 namespace 来定义命名空间
         * @reason 使用 es6 引入模块，才是更标准的方式。
         * 但是允许使用 declare namespace ... {} 来定义外部命名空间
         */
        '@typescript-eslint/no-namespace': [
          'error',
          {
            allowDeclarations: true,
            allowDefinitionFiles: true,
          },
        ],
        /**
         * 禁止使用 module 来定义命名空间
         * @reason module 已成为 js 的关键字
         */
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        /**
         * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
         * @reason optional chaining 后面的属性一定是非空的
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        /**
         * 禁止使用 non-null 断言（感叹号）
         * @reason 使用 non-null 断言时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 'off',
        /**
         * 禁止给类的构造函数的参数添加修饰符
         * @reason 强制所有属性都定义到类里面，比较统一
         */
        '@typescript-eslint/no-parameter-properties': 'error',
        /**
         * 禁止重复定义变量
         * @reason 禁用 var 之后，编译阶段就会报错了
         */
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        /**
         * 在react-native中资源文件需要使用require引入
         * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
         */
        '@typescript-eslint/no-require-imports': 'off',
        /**
         * 禁止变量名与上层作用域内的已定义的变量重复
         * @reason 很多时候函数的形参和传参是同名的
         */
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        /**
         * 禁止将 this 赋值给其他变量，除非是解构赋值
         */
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true,
          },
        ],
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         */
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        /**
         * 禁止使用类型别名
         */
        '@typescript-eslint/no-type-alias': 'off',
        /**
         * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         */
        '@typescript-eslint/no-unnecessary-condition': 'off',
        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        /**
         * 禁止范型的类型有默认值时，将范型设置为该默认值
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        /**
         * 禁止无用的类型断言
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        /**
         * 禁止没用的类型限制
         */
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        /**
         * 禁止将 any 类型的变量作为函数参数调用
         */
        '@typescript-eslint/no-unsafe-argument': 'off',
        /**
         * 禁止将变量或属性的类型设置为 any
         */
        '@typescript-eslint/no-unsafe-assignment': 'off',
        /**
         * 禁止调用 any 类型的变量上的方法
         */
        '@typescript-eslint/no-unsafe-call': 'off',
        /**
         * 禁止获取 any 类型的变量中的属性
         */
        '@typescript-eslint/no-unsafe-member-access': 'off',
        /**
         * 禁止函数的返回值的类型是 any
         */
        '@typescript-eslint/no-unsafe-return': 'off',
        /**
         * 禁止无用的表达式
         */
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        /**
         * 已定义的变量必须使用
         * @reason 编译阶段检查就足够了
         */
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        /**
         * 禁止在定义变量之前就使用它
         * @reason 编译阶段检查就足够了
         */
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        /**
         * 禁止出现没必要的 constructor
         */
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        /**
         * 禁止使用 require 来引入模块
         * @reason no-require-imports 规则已经约束了 require
         */
        '@typescript-eslint/no-var-requires': 'off',
        /**
         * 必须使用 ! 而不是 as
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        /**
         * 使用 as const 替代 as 'bar'
         * @reason as const 是新语法，不是很常见
         */
        '@typescript-eslint/prefer-as-const': 'off',
        /**
         * 枚举值必须初始化
         */
        '@typescript-eslint/prefer-enum-initializers': 'off',
        /**
         * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @reason for of 循环更加易读
         */
        '@typescript-eslint/prefer-for-of': 'error',
        /**
         * 使用函数类型别名替代包含函数调用声明的接口
         */
        '@typescript-eslint/prefer-function-type': 'error',
        /**
         * 使用 includes 而不是 indexOf
         */
        '@typescript-eslint/prefer-includes': 'off',
        /**
         * 枚举类型的值必须是字面量，禁止是计算值
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/prefer-literal-enum-member': 'off',

        /**
         * 使用 ?? 替代 ||
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        /**
         * 使用 optional chaining 替代 &&
         */
        '@typescript-eslint/prefer-optional-chain': 'error',
        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         */
        '@typescript-eslint/prefer-readonly': 'off',
        /**
         * 函数的参数必须设置为 readonly
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        /**
         * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        /**
         * 使用 RegExp#exec 而不是 String#match
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',
        /**
         * 使用 String#startsWith 而不是其他方式
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        /**
         * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
         * @reason 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
         */
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        /**
         * async 函数的返回值必须是 Promise
         */
        '@typescript-eslint/promise-function-async': 'off',
        /**
         * 使用 sort 时必须传入比较函数
         */
        '@typescript-eslint/require-array-sort-compare': 'off',
        /**
         * async 函数中必须存在 await 语句
         */
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off',
        /**
         * 使用加号时，两者必须同为数字或同为字符串
         */
        '@typescript-eslint/restrict-plus-operands': 'off',
        /**
         * 模版字符串中的变量类型必须是字符串
         */
        '@typescript-eslint/restrict-template-expressions': 'off',
        /**
         * 禁止在 return 语句里使用 await
         */
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'off',
        /**
         * 联合类型和交叉类型的每一项必须按字母排序
         */
        '@typescript-eslint/sort-type-union-intersection-members': 'off',
        /**
         * 条件判断必须传入布尔值
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',
        /**
         * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        /**
         * 禁止使用三斜杠导入文件
         * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
         */
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'never',
            types: 'always',
            lib: 'always',
          },
        ],
        /**
         * interface 和 type 定义时必须声明成员的类型
         */
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: false,
            objectDestructuring: false,
            parameter: false,
            propertyDeclaration: true,
            variableDeclaration: false,
          },
        ],
        /**
         * 方法调用时需要绑定到正确的 this 上
         */
        '@typescript-eslint/unbound-method': 'off',
        /**
         * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
         */
        '@typescript-eslint/unified-signatures': 'error',
      },
    },
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__{mocks,tests}__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        'react-native/no-inline-styles': 0,
      },
    },
  ],

  // Map from global var to bool specifying if it can be redefined
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
  },

  rules: {
    // General
    'comma-dangle': [1, 'always-multiline'], // allow or disallow trailing commas
    'no-cond-assign': 1, // disallow assignment in conditional expressions
    'no-console': 0, // disallow use of console (off by default in the node environment)
    'no-const-assign': 2, // disallow assignment to const-declared variables
    'no-constant-condition': 0, // disallow use of constant expressions in conditions
    'no-control-regex': 1, // disallow control characters in regular expressions
    'no-debugger': 1, // disallow use of debugger
    'no-dupe-class-members': 2, // Disallow duplicate name in class members
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
    'no-empty': 0, // disallow empty statements
    'no-ex-assign': 1, // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 1, // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
    'no-extra-semi': 1, // disallow unnecessary semicolons
    'no-func-assign': 1, // disallow overwriting functions written as function declarations
    'no-inner-declarations': 0, // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 1, // disallow invalid regular expression strings in the RegExp constructor
    'no-negated-in-lhs': 1, // disallow negation of the left operand of an in expression
    'no-obj-calls': 1, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-regex-spaces': 1, // disallow multiple spaces in a regular expression literal
    'no-reserved-keys': 0, // disallow reserved words being used as object literal keys (off by default)
    'no-sparse-arrays': 1, // disallow sparse arrays
    'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
    'use-isnan': 1, // disallow comparisons with the value NaN
    'valid-jsdoc': 0, // Ensure JSDoc comments are valid (off by default)
    'valid-typeof': 1, // Ensure that the results of typeof are compared against a valid string

    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

    'block-scoped-var': 0, // treat var statements as if they were block scoped (off by default)
    complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    'consistent-return': 0, // require return statements to either always or never specify values
    curly: 1, // specify curly brace conventions for all control statements
    'default-case': 0, // require default case in switch statements (off by default)
    'dot-notation': 1, // encourages use of dot notation whenever possible
    eqeqeq: [1, 'allow-null'], // require the use of === and !==
    'guard-for-in': 0, // make sure for-in loops have an if statement (off by default)
    'no-alert': 1, // disallow the use of alert, confirm, and prompt
    'no-caller': 1, // disallow use of arguments.caller or arguments.callee
    'no-div-regex': 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-else-return': 0, // disallow else after a return in an if (off by default)
    'no-eq-null': 0, // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': 2, // disallow use of eval()
    'no-extend-native': 1, // disallow adding to native types
    'no-extra-bind': 1, // disallow unnecessary function binding
    'no-fallthrough': 1, // disallow fallthrough of case statements
    'no-floating-decimal': 1, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implied-eval': 1, // disallow use of eval()-like methods
    'no-labels': 1, // disallow use of labeled statements
    'no-iterator': 1, // disallow usage of __iterator__ property
    'no-lone-blocks': 1, // disallow unnecessary nested blocks
    'no-loop-func': 0, // disallow creation of functions within loops
    'no-multi-str': 0, // disallow use of multiline strings
    'no-native-reassign': 0, // disallow reassignments of native objects
    'no-new': 1, // disallow use of new operator when not part of the assignment or comparison
    'no-new-func': 2, // disallow use of new operator for Function object
    'no-new-wrappers': 1, // disallows creating new instances of String,Number, and Boolean
    'no-octal': 1, // disallow use of octal literals
    'no-octal-escape': 1, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-proto': 1, // disallow usage of __proto__ property
    'no-redeclare': 0, // disallow declaring the same variable more then once
    'no-return-assign': 1, // disallow use of assignment in return statement
    'no-script-url': 1, // disallow use of javascript: urls.
    'no-self-compare': 1, // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': 1, // disallow use of comma operator
    'no-unused-expressions': 0, // disallow usage of expressions in statement position
    'no-useless-escape': 1, // disallow escapes that don't have any effect in literals
    'no-void': 1, // disallow use of void operator (off by default)
    'no-warning-comments': 0, // disallow usage of configurable warning terms in comments": 1,                        // e.g. TODO or FIXME (off by default)
    'no-with': 1, // disallow use of the with statement
    radix: 1, // require use of the second argument for parseInt() (off by default)
    'semi-spacing': 1, // require a space after a semi-colon
    'vars-on-top': 0, // requires to declare all vars on top of their containing scope (off by default)
    'wrap-iife': 0, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: 1, // require or disallow Yoda conditions

    // Variables
    // These rules have to do with variable declarations.

    'no-catch-shadow': 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-delete-var': 1, // disallow deletion of variables
    'no-label-var': 1, // disallow labels that share a name with a variable
    'no-shadow': 1, // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 1, // disallow shadowing of names such as arguments
    'no-undef': 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undefined': 0, // disallow use of undefined variable (off by default)
    'no-undef-init': 1, // disallow use of undefined when initializing variables
    'no-unused-vars': [1, {vars: 'all', args: 'none', ignoreRestSiblings: true}], // disallow declaration of variables that are not used in the code
    'no-use-before-define': 0, // disallow use of variables before they are defined

    // Node.js
    // These rules are specific to JavaScript running on Node.js.

    'handle-callback-err': 1, // enforces error handling in callbacks (off by default) (on by default in the node environment)
    'no-mixed-requires': 1, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    'no-new-require': 1, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    'no-path-concat': 1, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-process-exit': 0, // disallow process.exit() (on by default in the node environment)
    'no-restricted-modules': 1, // restrict usage of specified node modules (off by default)
    'no-sync': 0, // disallow use of synchronous methods (off by default)

    // ESLint Comments Plugin
    // The following rules are made available via `eslint-plugin-eslint-comments`
    'eslint-comments/no-aggregating-enable': 1, // disallows eslint-enable comments for multiple eslint-disable comments
    'eslint-comments/no-unlimited-disable': 1, // disallows eslint-disable comments without rule names
    'eslint-comments/no-unused-disable': 0, // disallow disables that don't cover any errors
    'eslint-comments/no-unused-enable': 1, // // disallow enables that don't enable anything or enable rules that weren't disabled

    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.

    'key-spacing': 0,
    'keyword-spacing': 1, // enforce spacing before and after keywords
    'jsx-quotes': [1, 'prefer-double'], // enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote
    'comma-spacing': 0,
    'no-multi-spaces': 0,
    'brace-style': 0, // enforce one true brace style (off by default)
    camelcase: 0, // require camel case names
    'consistent-this': 1, // enforces consistent naming when capturing the current execution context (off by default)
    'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
    'func-names': 0, // require function expressions to have a name (off by default)
    'func-style': 0, // enforces use of function declarations or expressions (off by default)
    'new-cap': 0, // require a capital letter for constructors
    'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
    'no-array-constructor': 1, // disallow use of the Array constructor
    'no-empty-character-class': 1, // disallow the use of empty character classes in regular expressions
    'no-lonely-if': 0, // disallow if as the only statement in an else block (off by default)
    'no-new-object': 1, // disallow use of the Object constructor
    'no-ternary': 0, // disallow the use of ternary operators (off by default)
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'no-mixed-spaces-and-tabs': 1, // disallow mixed spaces and tabs for indentation
    quotes: [1, 'single', 'avoid-escape'], // specify whether double or single quotes should be used
    'quote-props': 0, // require quotes around object literal property names (off by default)
    semi: 1, // require or disallow use of semicolons instead of ASI
    'sort-vars': 0, // sort variables within the same declaration block (off by default)
    'space-in-brackets': 0, // require or disallow spaces inside brackets (off by default)
    'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 1, // require spaces around operators
    'space-unary-ops': [1, {words: true, nonwords: false}], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'max-nested-callbacks': 0, // specify the maximum depth callbacks can be nested (off by default)
    'one-var': 0, // allow just one var statement per function (off by default)
    'wrap-regex': 0, // require regex literals to be wrapped in parentheses (off by default)

    // Legacy
    // The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.

    'max-depth': 0, // specify the maximum depth that blocks can be nested (off by default)
    'max-len': 0, // specify the maximum length of a line in your program (off by default)
    'max-params': 0, // limits the number of parameters that can be used in the function declaration. (off by default)
    'max-statements': 0, // specify the maximum number of statement allowed in a function (off by default)
    'no-bitwise': 1, // disallow use of bitwise operators (off by default)
    'no-plusplus': 0, // disallow use of unary operators, ++ and -- (off by default)

    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.

    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/wrap-multilines': 0,

    // React-Hooks Plugin
    // The following rules are made available via `eslint-plugin-react-hooks`
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // React-Native Plugin
    // The following rules are made available via `eslint-plugin-react-native`

    'react-native/no-inline-styles': 1,

    // Jest Plugin
    // The following rules are made available via `eslint-plugin-jest`.
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 1,
    'jest/no-identical-title': 1,
    'jest/valid-expect': 1,


    //prettier disable prettier , manual code format when submit code
    'prettier/prettier': 0,


  },
};
