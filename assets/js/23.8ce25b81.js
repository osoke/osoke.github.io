(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{412:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),s("p",[t._v("在 iPad 上使用 "),s("code",[t._v("MarginNote")]),t._v(" 看 PDF, 添加摘录、笔记, 然后将 "),s("code",[t._v("MarginNote")]),t._v(" 中的笔记导出到 "),s("code",[t._v("Obsidian")]),t._v(" 中统一管理, 方便查找。 以下为尝试过的方法:")]),t._v(" "),s("h3",{attrs:{id:"方法1-先转「思维导图」再转-md"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法1-先转「思维导图」再转-md"}},[t._v("#")]),t._v(" 方法1: 先转「思维导图」再转 md")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("MarginNote")]),t._v(" 中将笔记本导出为 "),s("code",[t._v("MindManager 和 iThoughts")])]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("iThoughts")]),t._v(" 导入上一步导出的 "),s("code",[t._v(".mmap 文件")])]),t._v(" "),s("li",[s("code",[t._v("iThoughts")]),t._v(" 右上分享 ▶ 打开方式 ▶ Markdown ▶ (.textpack)")])]),t._v(" "),s("p",[t._v("优点: 最后导出的文件类似于「大纲笔记」, 保留了原内容的层次结构, 只需稍加整理即可使用。")]),t._v(" "),s("h3",{attrs:{id:"方法2-先转-word-再转-md"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法2-先转-word-再转-md"}},[t._v("#")]),t._v(" 方法2: 先转 word 再转 md")]),t._v(" "),s("ol",[s("li",[t._v("将笔记本导出为 "),s("code",[t._v("MS Word(docx)")])]),t._v(" "),s("li",[t._v("使用 pandoc 将 word 转为 md\n"),s("ul",[s("li",[t._v("首先下载、安装 "),s("a",{attrs:{href:"https://www.pandoc.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pandoc"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("打开 CMD 在 「word 文件所在目录」运行以下命令:")])])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pandoc -f docx -t markdown --extract-media ./images -o dest_文件.md src_文件.docx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("转换之后, word 中的图片会提取到 "),s("code",[t._v("./images/media")]),t._v(" 目录下")]),t._v(" "),s("p",[t._v("问题: 转换之后的 md 有很多冗余的内容, 清理起来很麻烦")]),t._v(" "),s("h3",{attrs:{id:"方法3-使用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法3-使用插件"}},[t._v("#")]),t._v(" 方法3: 使用插件")]),t._v(" "),s("p",[t._v("同时打开 "),s("code",[t._v("MN")]),t._v(" 的 "),s("code",[t._v("Obsidian-bridge")]),t._v(" 插件和 "),s("code",[t._v("Ob")]),t._v(" 的 "),s("code",[t._v("MarginNote Companion")]),t._v(" 插件")]),t._v(" "),s("p",[t._v("具体使用是这样的:\n需要以分屏的方式同时打开 MarginNote 和 Obsidian, 在 MarginNote 做好一个脑图卡片, 选中卡片并粘贴到 Obsidian 中。")]),t._v(" "),s("p",[t._v("该方法只是大概了解了一下, 无法一次性完整导出整个笔记本, 最多支持一次性导出所有的卡片标题, 想要完整导出就得逐个卡片导出, 不太方便, pass。")]),t._v(" "),s("h2",{attrs:{id:"选哪个方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选哪个方法"}},[t._v("#")]),t._v(" 选哪个方法?")]),t._v(" "),s("p",[t._v("推荐"),s("code",[t._v("方法1")]),t._v(", 但是图片有个小问题")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("iThoughts")]),t._v(" 导出 "),s("code",[t._v("markdown·textpack")]),t._v(" 默认带图片")]),t._v(" "),s("li",[t._v("但是图片是「注释+引用」的形式, 在 "),s("code",[t._v("Obsidian")]),t._v(" 中无法显示 (Typora 可以显示)")])]),t._v(" "),s("p",[s("strong",[t._v("写个 python 脚本替换一下")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re  \n  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压目录  ")]),t._v("\nbase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'textpack·text.md 文件路径:\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 text.md 中的图片引用 ![][1] 修改为 ![[assets/abc.png]] 格式  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replacetext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r+'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        pics "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/.*?.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件末尾有所有 [图片] 注释  ")]),t._v("\n  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" pic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" pics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n            data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\[\\]\\[\\d+\\]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'[[")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("]]'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每次替换1个  ")]),t._v("\n  \n        f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seek"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 0 插入 new data")]),t._v("\n        f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("truncate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去除  old data  ")]),t._v("\n  \nreplacetext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n 图片链接修改成功 🎉🎉🎉\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("h2",{attrs:{id:"具体导入步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体导入步骤"}},[t._v("#")]),t._v(" 具体导入步骤")]),t._v(" "),s("ol",[s("li",[t._v("将导出的 "),s("code",[t._v(".textpack")]),t._v(" 重命名为 "),s("code",[t._v(".zip")]),t._v(" 并解压")]),t._v(" "),s("li",[t._v("运行上述 "),s("code",[t._v(".py")]),t._v(" 脚本, 输入上述解压目录中 "),s("code",[t._v("text.md")]),t._v(" 文件全路径, 进行转换")]),t._v(" "),s("li",[t._v("最后将 "),s("code",[t._v("text.md")]),t._v(" 和 "),s("code",[t._v("assets 文件夹")]),t._v(" 拷贝到 obsidian 中即可")])])])}),[],!1,null,null,null);s.default=e.exports}}]);