# Bắt đầu với Antigravity Awesome Skills (V3)

[Đọc bản gốc tiếng Anh](./GETTING_STARTED.md)

**Bạn là người mới? Hướng dẫn này sẽ giúp bạn "nâng cấp" trí tuệ cho AI Agent chỉ trong 5 phút.**

---

## 🤔 "Skill" là gì?

Các trợ lý AI (như **Claude Code**, **Gemini**, **Cursor**) vốn rất thông minh, nhưng chúng thường thiếu kiến thức chuyên sâu về bộ công cụ cụ thể mà bạn đang dùng.
**Skills** chính là những cuốn "cẩm nang hướng dẫn" (file markdown) giúp dạy cho AI biết cách thực hiện từng tác vụ chuyên biệt một cách chuẩn xác nhất.

**Hãy tưởng tượng:** AI của bạn là một thực tập sinh thiên tài. **Skills** chính là các quy trình chuẩn (SOPs) giúp biến cậu thực tập sinh đó thành một Kỹ sư Cao cấp (Senior Engineer) dày dặn kinh nghiệm.

---

## ⚡️ Bắt đầu nhanh: Dùng "Gói Khởi Điểm" (Starter Packs)

Đừng bị choáng ngợp bởi con số 256+ skill. Bạn không cần phải dùng hết tát cả cùng lúc.
Chúng tôi đã soạn sẵn các **Gói Khởi Điểm** để bạn có thể bắt tay vào việc ngay.

### 1. Cài đặt Repo

Clone toàn bộ kho skill này vào thư mục cấu hình của agent:

```bash
# Cách cài đặt chung (áp dụng cho hầu hết các loại agent)
git clone https://github.com/sickn33/antigravity-awesome-skills.git .agent/skills
```

### 2. Chọn Gói phù hợp với Vai trò (Persona)

Hãy tìm gói (Bundle) phù hợp nhất với công việc của bạn (xem chi tiết tại [docs/BUNDLES.vi.md](../BUNDLES.vi.md)):

| Vai Trò               | Tên Gói        | Gồm những gì?                                     |
| :-------------------- | :------------- | :------------------------------------------------ |
| **Web Developer**     | `Web Wizard`   | React Patterns, bí kíp Tailwind, Thiết kế Frontend|
| **Security Engineer** | `Hacker Pack`  | OWASP, Metasploit, Quy trình Pentest              |
| **Manager / PM**      | `Product Pack` | Brainstorming, Lập kế hoạch, SEO, Chiến lược      |
| **Bất kỳ ai**         | `Essentials`   | Clean Code, Lập kế hoạch, Kiểm tra code (Cơ bản)  |

---

## 🚀 Cách sử dụng Skill

Sau khi cài đặt xong, bạn cứ trò chuyện với AI như bình thường.

### Ví dụ 1: Lên kế hoạch tính năng (Gói **Essentials**)

> "Dùng **@brainstorming** giúp tôi lên ý tưởng cho luồng đăng nhập (login flow) mới."

**Kết quả:** AI sẽ kích hoạt skill brainstorming, đặt các câu hỏi định hướng, và cuối cùng soạn ra một bản đặc tả (spec) chuyên nghiệp cho bạn.

### Ví dụ 2: Rà soát Code (Gói **Web Wizard**)

> "Chạy **@lint-and-validate** trên file này và sửa các lỗi giúp tôi."

**Kết quả:** AI sẽ tuân thủ nghiêm ngặt các quy tắc linting đã được định nghĩa trong skill để dọn dẹp và chuẩn hóa code của bạn.

### Ví dụ 3: Kiểm toán Bảo mật (Gói **Hacker Pack**)

> "Dùng **@api-security-best-practices** để review các API endpoint này xem có lỗ hổng nào không."

**Kết quả:** AI sẽ đóng vai chuyên gia bảo mật, rà soát code của bạn dựa trên các tiêu chuẩn an toàn của OWASP.

---

## 🔌 Các công cụ hỗ trợ

| Công cụ         | Trạng thái      | Đường dẫn cài đặt |
| :-------------- | :-------------- | :---------------- |
| **Claude Code** | ✅ Hỗ trợ tốt   | `.claude/skills/` |
| **Gemini CLI**  | ✅ Hỗ trợ tốt   | `.gemini/skills/` |
| **Antigravity** | ✅ Mặc định     | `.agent/skills/`  |
| **Cursor**      | ✅ Mặc định     | `.cursor/skills/` |
| **Copilot**     | ⚠️ Chỉ Text     | Phải copy-paste thủ công |

---

## 🛡️ Độ Tin Cậy & An Toàn (Mới)

Để bạn yên tâm sử dụng, chúng tôi phân loại skill theo các nhãn sau:

- 🟣 **Official**: Skill chính chủ, được bảo trì bởi Anthropic/Google hoặc các nhà cung cấp uy tín (Độ tin cậy cao).
- 🔵 **Safe**: Skill do cộng đồng đóng góp, an toàn, không gây hại (thường là skill đọc hoặc lập kế hoạch).
- 🔴 **Risk**: Skill có khả năng sửa đổi hệ thống hoặc thực hiện các bài test bảo mật (Chỉ dùng khi bạn hiểu rõ và cho phép).

_Xem [Danh sách đầy đủ](README.vi.md#danh-sách-skill-đầy-đủ-256256) để biết nhãn rủi ro của từng skill._

---

## ❓ Câu hỏi thường gặp (FAQ)

**H: Tôi có bắt buộc phải cài hết 250 skill không?**
Đ: Bạn clone cả repo về, nhưng AI chỉ _đọc_ đúng cái skill mà bạn gọi (hoặc liên quan) thôi. Nên nó rất nhẹ, không lo nặng máy!

**H: Tôi tự viết skill riêng được không?**
Đ: Được chứ! Hãy dùng skill **@skill-creator** để nó hướng dẫn bạn tạo skill mới từ A-Z.

**H: Dùng cái này có mất phí không?**
Đ: Hoàn toàn miễn phí. Giấy phép MIT. Mã nguồn mở mãi mãi.

---

## ⏭️ Bước tiếp theo

1. [Xem chi tiết các Gói (Bundles)](../BUNDLES.vi.md)
2. [Tham khảo các ví dụ thực tế](../EXAMPLES.vi.md)
3. [Đóng góp Skill cho cộng đồng](CONTRIBUTING.vi.md)
