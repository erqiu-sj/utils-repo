create() {
    read -r -p "输入项目名" name
    read -r -p "选择模版(template下文件夹name)" template
    cp -R ./template/$template ./project/$name
}

create
