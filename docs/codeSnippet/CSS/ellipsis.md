## 超出显示省略号-单行

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 超出显示省略号-多行

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 行数
  -webkit-box-orient: vertical;
}
```