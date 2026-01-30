# 🤝 Hướng Dẫn Đóng Góp - V3 Enterprise Edition

[Đọc bản gốc tiếng Anh](./CONTRIBUTING.md)

**Cảm ơn bạn đã quan tâm và muốn đóng góp cho dự án!**
Tài liệu này sẽ hướng dẫn bạn quy trình đóng góp một cách cụ thể, ngay cả khi bạn chưa từng tham gia dự án mã nguồn mở nào.
Trong phiên bản V3, chúng tôi đặt ra tiêu chuẩn chất lượng cao hơn. Vui lòng đọc kỹ phần **Tiêu Chuẩn Chất Lượng Mới** bên dưới.

---

## 🧐 "Thước Đo Chất Lượng" (Tiêu Chuẩn V3)

**Lưu ý quan trọng cho Skill mới:** Mọi skill được gửi lên đều phải vượt qua **Quy Trình Kiểm Tra 5 Điểm** (xem chi tiết tại `docs/QUALITY_BAR.md`):

1.  **Metadata (Siêu dữ liệu)**: Khai báo Frontmatter chính xác (gồm `name`, `description`).
2.  **Safety (An toàn)**: Tuyệt đối không chứa lệnh gây nguy hiểm nếu không gắn nhãn "Risk".
3.  **Clarity (Rõ ràng)**: Mục "When to use" (Khi nào sử dụng) phải được mô tả cụ thể, dễ hiểu.
4.  **Examples (Ví dụ)**: Phải cung cấp ít nhất một ví dụ thực tế có thể copy-paste và chạy được ngay.
5.  **Actions (Hành động)**: Phải đưa ra các bước thực hiện cụ thể, tránh nói chung chung kiểu "hãy suy nghĩ về...".

---

## Các Cách Đóng Góp

Bạn không cần phải là chuyên gia mới có thể đóng góp! Dưới đây là những việc mà bất kỳ ai cũng có thể làm để hỗ trợ dự án:

### 1. Cải Thiện Tài Liệu (Dễ nhất!)

- Sửa lỗi chính tả, ngữ pháp.
- Viết lại các đoạn hướng dẫn cho dễ hiểu hơn.
- Bổ sung ví dụ minh họa cho các skill hiện có.
- Dịch tài liệu sang ngôn ngữ khác (Như bản dịch tiếng Việt này chẳng hạn!).

### 2. Báo Cáo Vấn Đề (Issues)

- Thấy chỗ nào khó hiểu? Hãy phản hồi cho chúng tôi!
- Skill chạy không đúng? Hãy báo lỗi ngay!
- Có ý tưởng hay ho? Chúng tôi rất muốn lắng nghe!

### 3. Tạo Skill Mới

- Đóng gói kiến thức chuyên môn của bạn thành một skill.
- Bổ sung những mảng kiến thức còn thiếu trong kho tàng skill hiện tại.
- Nâng cấp và cải thiện các skill đã có.

### 4. Kiểm Tra và Xác Thực

- Chạy thử các skill và báo cáo kết quả (cái nào ổn, cái nào lỗi).
- Test trên nhiều công cụ AI khác nhau (Claude, ChatGPT, Gemini...).
- Đề xuất các cải tiến về hiệu năng hoặc trải nghiệm.

---

## Quy Trình Tạo Một Skill Mới

### Hướng Dẫn Từng Bước

#### Bước 1: Chọn Chủ Đề

Hãy tự hỏi: "Mình ước gì con AI của mình biết rành rẽ về cái gì nhỉ?".
Ví dụ: "Mình thạo Docker, để mình viết một skill dạy nó dùng Docker cho chuẩn".

#### Bước 2: Tạo Cấu Trúc Thư Mục

Tất cả skill nằm trong thư mục `skills/`. Hãy đặt tên thư mục theo kiểu `kebab-case` (chữ thường, nối bằng gạch ngang).

```bash
# Vào thư mục skills
cd skills/

# Tạo thư mục cho skill mới
mkdir my-awesome-skill
cd my-awesome-skill

# Tạo file nội dung SKILL.md
touch SKILL.md
```

#### Bước 3: Viết Nội Dung SKILL.md

Mọi skill đều phải tuân theo cấu trúc cơ bản sau. **Hãy copy mẫu này để bắt đầu:**

```markdown
---
name: my-awesome-skill
description: "Mô tả ngắn gọn (1 dòng) về công dụng của skill này"
---

# Tên Skill

## Tổng Quan

Giải thích skill này dùng để làm gì và bối cảnh sử dụng.

## Khi Nào Nên Dùng (When to Use)

- Dùng khi [trường hợp 1]
- Dùng khi [trường hợp 2]

## Cách Hoạt Động

Hướng dẫn từng bước chi tiết để AI làm theo...

## Ví Dụ Minh Họa

### Ví Dụ 1

\`\`\`
code example here
\`\`\`

## Lưu Ý / Best Practices

- ✅ Nên làm: ...
- ❌ Tránh làm: ...
```

#### Bước 4: Kiểm Tra (QUAN TRỌNG VỚI V3)

Chạy script kiểm tra (validation) trên máy của bạn. **Chúng tôi sẽ không merge các PR nếu chưa qua bước này.**

```bash
# Chế độ thường (chỉ hiện cảnh báo)
python3 scripts/validate_skills.py

# Chế độ nghiêm ngặt (giống hệ thống CI)
python3 scripts/validate_skills.py --strict
```

Script này sẽ check:

- ✅ File `SKILL.md` đã có chưa?
- ✅ Frontmatter khai báo đúng chưa?
- ✅ Tên skill có khớp với tên thư mục không?
- ✅ Có đạt chuẩn chất lượng (Quality Bar) không?

#### Bước 5: Gửi Skill (Pull Request)

```bash
git add skills/my-awesome-skill/
git commit -m "feat: add my-awesome-skill"
git push origin my-branch
```

---

## Mẫu Template Chuẩn (Copy & Paste)

Để tiết kiệm thời gian, bạn hãy dùng mẫu đầy đủ này:

```markdown
---
name: your-skill-name
description: "Mô tả ngắn gọn công dụng và thời điểm dùng skill này"
---

# Tên Skill

## Tổng Quan

[2-3 câu giới thiệu ngắn gọn về chức năng của skill]

## Khi Nào Nên Dùng

- Khi bạn cần [làm việc A]
- Khi bạn muốn [đạt kết quả B]

## Hướng Dẫn Chi Tiết

### 1. [Bước đầu tiên]

[Mô tả các thực hiện]

## Ví Dụ

### Ví Dụ 1: [Tên trường hợp cụ thể]

\`\`\`language
// Code mẫu
\`\`\`

## Best Practices

- ✅ **Nên:** [Thói quen tốt]
- ❌ **Không nên:** [Điều cần tránh]

## Xử Lý Sự Cố (Troubleshooting)

**Vấn Đề:** [Lỗi thường gặp]
**Giải Pháp:** [Cách khắc phục]
```

---

## Quy Tắc Viết Commit Message

Vui lòng sử dụng các tiền tố sau để phân loại commit:

- `feat:` - Thêm skill mới hoặc tính năng lớn.
- `docs:` - Cập nhật/sửa đổi tài liệu.
- `fix:` - Sửa lỗi (bug fix).
- `refactor:` - Tối ưu code nhưng không đổi tính năng.
- `test:` - Thêm hoặc sửa test.
- `chore:` - Các việc vặt, bảo trì hệ thống.

**Ví dụ:**

```
feat: add kubernetes-deployment skill
docs: improve getting started guide
fix: correct typo in stripe-integration skill
```

---

## Tài Liệu Tham Khảo

### Cho người mới dùng Git/GitHub

- [Hướng dẫn Hello World của GitHub](https://guides.github.com/activities/hello-world/)
- [Git Cơ bản](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

### Cho người mới viết Markdown

- [Hướng dẫn Markdown](https://www.markdownguide.org/basic-syntax/)

---

## Quy Tắc Ứng Xử (Code of Conduct)

- Tôn trọng và hòa nhã với mọi người.
- Luôn chào đón thành viên mới.
- Góp ý mang tính xây dựng, tích cực.
- **Nghiêm cấm nội dung độc hại**: Xem chi tiết tại `docs/SECURITY_GUARDRAILS.md`.

---

**Cảm ơn bạn đã góp phần xây dựng dự án!**
Mỗi đóng góp của bạn, dù là nhỏ nhất, đều rất đáng quý. Dù chỉ là sửa lỗi chính tả hay viết hẳn một skill mới - bạn đang trực tiếp giúp đỡ hàng ngàn lập trình viên khác làm việc hiệu quả hơn!
