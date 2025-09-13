import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';  // Nhập plugin postcss

export default {
  input: 'src/components/index.js',  // Đầu vào chính của Rollup
  output: {
    file: 'dist/shopping-cart-library.js',  // Tạo tệp thư viện đóng gói ở thư mục dist
    format: 'cjs',  // Định dạng CommonJS
    exports: 'named',  // Xuất các component với tên đã chỉ định
    globals: {
      react: 'React',  // React được coi là một phụ thuộc bên ngoài
      'react-dom': 'ReactDOM',  // React-DOM cũng là phụ thuộc bên ngoài
    },
  },
  external: ['react', 'react-dom'],  // Đảm bảo rằng React và React-DOM là dependencies bên ngoài
  plugins: [
    postcss({
      extensions: ['.css'],  // Hỗ trợ import các tệp .css
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],  // Dùng preset cho JSX và ES6+
      exclude: 'node_modules/**',
    }),
  ],
};
