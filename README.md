# [Thực hành] Thuộc tính CSS flex-grow Property

Bài tập thực hành và nghiên cứu chuyên sâu về thuộc tính **`flex-grow`** trong CSS Flexbox, mô phỏng cơ chế phân bổ không gian thừa (remaining free space) với ví dụ 5 thẻ div và phòng thí nghiệm tương tác (Interactive Live Playground).

---

## 📌 Nội dung kiến thức

### 1. Khái niệm `flex-grow`
- Thuộc tính `flex-grow` chỉ định item sẽ tăng bao nhiêu so với các item khác bên trong vùng chứa.
- Nói cách khác, đó là khả năng phát triển của một item so với các item khác có bên trong cùng một vùng chứa.
- **Lưu ý:** Nếu item trong vùng chứa không phải là flex item (không phải con trực tiếp của vùng chứa có `display: flex` hoặc `display: inline-flex`) thì thuộc tính `flex-grow` sẽ **không ảnh hưởng** đến item đó.

### 2. Cú pháp
```css
flex-grow: number | initial | inherit;
```

### 3. Các giá trị của thuộc tính
- **`number`**: Một số không âm, không đơn vị (ví dụ: `0`, `1`, `2`, `3`...). Xác định item sẽ phát triển như thế nào so với các flex item khác. Giá trị mặc định là `0` (không nở rộng).
- **`initial`**: Đặt thuộc tính trở về giá trị mặc định của CSS (`0`).
- **`inherit`**: Kế thừa giá trị thuộc tính từ phần tử cha (parent element).

### 4. Công thức phân bổ không gian thừa
1. **Khoảng trống còn lại (Remaining Space):**
   $$\text{Free Space} = \text{Container Width} - \sum \text{Base Width của các item} - \text{Gaps}$$
2. **Phần không gian nhận thêm của mỗi item:**
   $$\Delta W_i = \left(\frac{\text{flex-grow}_i}{\sum \text{flex-grow}}\right) \times \text{Free Space}$$
3. **Kích thước chiều rộng cuối cùng:**
   $$W_{\text{final}} = W_{\text{base}} + \Delta W_i$$

---

## 🎯 Yêu cầu ví dụ trong đề bài
> *"Ở đây chúng ta sẽ thấy trong một vùng chứa có 5 div, chúng ta sẽ áp dụng flex-grow: Trên div thứ 2 và div đó sẽ tăng so với 4 div khác. Chúng ta có thể áp dụng flex-grow trên bất kỳ tài liệu nào trong cùng một vùng chứa mà div sẽ phát triển so với chiều rộng của div khác, thuộc tính flex-grow sẽ giúp div đó phát triển so với các item khác trong vùng chứa đó."*

### Cấu trúc mã HTML:
```html
<div class="container">
  <div class="item item-1">Div 1</div>
  <div class="item item-2">Div 2 (Tăng trưởng)</div>
  <div class="item item-3">Div 3</div>
  <div class="item item-4">Div 4</div>
  <div class="item item-5">Div 5</div>
</div>
```

### Cấu trúc mã CSS:
```css
.container {
  display: flex;
  gap: 12px;
}

.item {
  width: 100px;
  flex-grow: 0; /* Mặc định các div không phát triển */
}

/* Áp dụng flex-grow lên div thứ 2 */
.item-2 {
  flex-grow: 1; /* Div 2 hấp thụ toàn bộ khoảng trống còn thừa */
}
```

---

## 📂 Cấu trúc thư mục

```
thuc-hanh-CSS-flex-grow-Property/
├── index.html       # Ứng dụng tổng quan, lý thuyết, demo và Interactive Playground
├── example.html     # Trang ví dụ độc lập 5 div chuẩn theo đề bài
├── style.css        # Hệ thống giao diện hiện đại, tối ưu UX/UI
├── script.js        # Logic tương tác thời gian thực, tính toán pixel
└── README.md        # Tài liệu hướng dẫn chi tiết
```

---

## 🚀 Hướng dẫn khởi chạy

1. Mở file `index.html` hoặc `example.html` trực tiếp bằng trình duyệt web (Google Chrome, Edge, Firefox, v.v.).
2. Hoặc sử dụng extension **Live Server** trong VS Code để trải nghiệm đầy đủ các tính năng tương tác mượt mà.


