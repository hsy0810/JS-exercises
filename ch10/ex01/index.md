 # npx webpack --mode=none ./ch10/ex01/index.cjs -o ./ch10/ex01/dist
- noneモードのとき、元のソースコードがそのまま生成される

# npx webpack --mode=development ./ch10/ex01/index.cjs -o ./ch10/ex01/dist
- developmentモードのとき、より読みやすく、モジュールの識別情報が保持される

# npx webpack --mode=production ./ch10/ex01/index.cjs -o ./ch10/ex01/dist
- productionモードのとき、ファイルは最適化され、不要なコードが削除される