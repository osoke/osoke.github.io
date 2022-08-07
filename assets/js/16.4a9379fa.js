(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{405:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"windnd-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windnd-简介"}},[s._v("#")]),s._v(" windnd 简介")]),s._v(" "),t("p",[s._v("windnd 是一个 python 库, 它给 Tkinter 窗口程序提供了一个接口, 在拖放文件到窗口时, 能够获取拖放的文件列表")]),s._v(" "),t("p",[t("strong",[s._v("pip 安装")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" windnd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" tkinter\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" windnd\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("call_back")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" idx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("enumerate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("idx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印路径")]),s._v("\n\n\nwindow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tkinter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nhwnd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("winfo_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 window 句柄")]),s._v("\nwindnd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hook_dropfiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hwnd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" func"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("call_back"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置回调  ")]),s._v("\n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不获取句柄, 直接传 window 也行  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# windnd.hook_dropfiles(window, func=call_back)  ")]),s._v("\n  \nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mainloop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h3",{attrs:{id:"运行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行脚本"}},[s._v("#")]),s._v(" 运行脚本")]),s._v(" "),t("p",[s._v("拖动文件到窗口, 打印如下")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("0 b'E:\\\\file1.txt'  \n1 b'E:\\\\file2.txt'  \n2 b'E:\\\\file3.txt'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("默认返回 bytes 字符串")]),s._v(" "),t("h3",{attrs:{id:"这样无法处理文件名中的特殊-unicode-字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#这样无法处理文件名中的特殊-unicode-字符"}},[s._v("#")]),s._v(" 这样无法处理文件名中的特殊 unicode 字符")]),s._v(" "),t("p",[s._v("假如将 "),t("code",[s._v("file1.txt")]),s._v(" 改名名为 "),t("code",[s._v("✅file1.txt")]),s._v(", 拖拽后打印如下")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("0 b'E:\\\\?file1.txt'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以发现, "),t("code",[s._v("unicode 字符 ✅")]),s._v(" 没有被正确解析, 变成了 "),t("code",[s._v("?")])]),s._v(" "),t("h3",{attrs:{id:"改用如下方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改用如下方式"}},[s._v("#")]),s._v(" 改用如下方式")]),s._v(" "),t("p",[s._v("开启 force_unicode 参数, 便可以处理 unicode 字符")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("windnd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hook_dropfiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hwnd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" func"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("call_back"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" force_unicode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("打印如下")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("0 E:\\test\\✅file1.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以看到, 返回结果已经不是 bytes 字符串, 并且正确解析了 unicode 字符")]),s._v(" "),t("h2",{attrs:{id:"实际使用中发现一个问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际使用中发现一个问题"}},[s._v("#")]),s._v(" 实际使用中发现一个问题")]),s._v(" "),t("p",[s._v("拖动文件时出错, 控制台显示:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Fatal Python error: PyEval_RestoreThread: NULL tstate\nProcess finished with exit code -1073740791 (0xC0000409)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("注意这里是没有堆栈报错信息的")]),s._v(" "),t("p",[s._v("最后经过删减代码排查, 找到了问题所在:\n回调函数中, 如果涉及到 "),t("code",[s._v("Tk widget")]),s._v(" 相关的操作, 会造成程序崩溃, 也不会打印堆栈报错信息\n猜想可能与 "),t("code",[s._v("main_loop")]),s._v(" 有冲突, 所以 "),t("code",[s._v("改用线程操作 Tk widget")]),s._v(", 终于可以正常运行")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" threading "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Thread\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("show_files")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""添加 files 到 list box"""')]),s._v("\n    Listbox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("END"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用线程")]),s._v("\n    Thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("show_files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);