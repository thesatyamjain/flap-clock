# ❓ Câu Hỏi Thường Gặp (FAQ)

**Bạn có thắc mắc?** Đừng lo, bạn không cô đơn đâu! Dưới đây là giải đáp cho những câu hỏi phổ biến nhất về Antigravity Awesome Skills.

---

## 🎯 Câu hỏi chung

### "Skill" rốt cuộc là cái gì?

Skills thực chất là các file hướng dẫn chuyên biệt dùng để dạy cho trợ lý AI cách xử lý một tác vụ cụ thể. Hãy coi nó như những module kiến thức chuyên gia mà AI của bạn có thể "nạp" vào khi cần.
**Ví dụ dễ hiểu:** Giống như trong phim Ma Trận, khi Neo cần biết lái trực thăng, anh ấy tải chương trình lái trực thăng vào não. Skills ở đây cũng y hệt vậy, giúp biến AI của bạn thành chuyên gia trong từng lĩnh vực (luật sư, bác sĩ, thợ máy...) tùy theo nhu cầu của bạn.

### Tôi có phải cài hết hơn 250 skill không?

**Không hề!** Khi bạn clone cái kho này về, toàn bộ skills sẽ nằm sẵn trong máy, NHƯNG AI của bạn chỉ thực sự đọc và load kỹ năng nào mà bạn gọi tên (bằng lệnh `@tên-skill`) thôi.
Nó giống như một thư viện sách: sách thì đầy trên kệ, nhưng bạn chỉ cần rút đúng cuốn bạn định đọc.
**Mẹo:** Dùng các [Gói Khởi Điểm (Starter Packs)](../BUNDLES.vi.md) để cài bộ phù hợp với công việc của bạn cho gọn.

### Những công cụ AI nào dùng được mấy skill này?

- ✅ **Claude Code** (Anthropic CLI)
- ✅ **Gemini CLI** (Google)
- ✅ **Codex CLI** (OpenAI)
- ✅ **Cursor** (AI IDE)
- ✅ **Antigravity IDE**
- ✅ **OpenCode**
- ⚠️ **GitHub Copilot** (Hỗ trợ một phần, phải copy-paste thủ công)

### Dùng cái này có mất phí không?

**Hoàn toàn miễn phí!** Dự án này dùng Giấy phép MIT.

- ✅ Miễn phí cho dùng cá nhân
- ✅ Miễn phí cho thương mại/công ty
- ✅ Bạn thoải mái sửa đổi code

### Skills có chạy offline không?

Bản thân các file skill nằm trên máy bạn (offline), nhưng trợ lý AI (Claude, Gemini...) thì vẫn cần mạng internet để hoạt động nhé.

---

## 🔒 Độ Tin Cậy & An Toàn (Cập nhật V3)

### Mấy cái "Nhãn Rủi Ro" (Risk Label) nghĩa là sao?

Để đảm bảo an toàn, chúng tôi phân loại skill theo màu:

- ⚪ **Safe (Trắng/Xanh)**: Skill an toàn, chỉ đọc, lập kế hoạch hoặc vô hại.
- 🔴 **Risk (Đỏ)**: Skill có khả năng chỉnh sửa/xóa file hệ thống, hoặc dùng để quét mạng (pentest). **Cần cẩn trọng khi dùng.**
- 🟣 **Official (Tím)**: Skill chính chủ do các nhà cung cấp uy tín (Anthropic, DeepMind...) bảo trì.

### Dùng skill này có sợ bị hack máy không?

**Không.** Skill chỉ là file văn bản (text). Tuy nhiên, nó chứa hướng dẫn để AI chạy lệnh. Nếu skill bảo "xóa hết file đi", một con AI ngây thơ có thể sẽ làm thật.
_Do đó: Luôn kiểm tra Nhãn Rủi Ro và đọc qua nội dung skill trước khi dùng._

---

## 📦 Cài đặt & Thiết lập

### Tôi nên cài skill vào đâu?

Đường dẫn chuẩn nhất dùng được cho hầu hết công cụ là `.agent/skills/`:

```bash
git clone https://github.com/sickn33/antigravity-awesome-skills.git .agent/skills
```

**Đường dẫn riêng cho từng tool:**

- Claude Code: `.claude/skills/`
- Gemini CLI: `.gemini/skills/`
- Cursor: `.cursor/skills/` hoặc thư mục gốc của dự án

### Dùng trên Windows có được không?

**Được**, nhưng lưu ý là một số skill "Official" có dùng **symlinks** (liên kết tượng trưng) mà Windows mặc định hỗ trợ hơi kém.
Hãy chạy lệnh git này để bật hỗ trợ symlink:

```bash
git clone -c core.symlinks=true https://github.com/sickn33/antigravity-awesome-skills.git .agent/skills
```

Hoặc bật chế độ "Developer Mode" trong phần Settings của Windows.

### Cập nhật skill kiểu gì?

Chỉ cần vào thư mục đó và pull code mới về là xong:

```bash
cd .agent/skills
git pull origin main
```

---

## 🛠️ Cách sử dụng

### Gọi skill như thế nào?

Dùng ký tự `@` cộng với tên skill:

```
@brainstorming giúp tôi thiết kế một app quản lý công việc
```

### Dùng nhiều skill cùng lúc được không?

**Được luôn!** Bạn có thể kết hợp (combo) nhiều skill:

```
@brainstorming lên ý tưởng cho tôi, xong rồi dùng @writing-plans để ra list công việc cụ thể nhé.
```

### Làm sao biết nên dùng skill nào?

1.  **Đọc file README**: Xem [Danh sách đầy đủ các skill](README.vi.md#trọn-bộ-danh-sách-256-kỹ-năng-full-list).
2.  **Tìm kiếm**: `ls skills/ | grep "từ-khóa"` (ví dụ tìm "test", "security").
3.  **Hỏi chính con AI**: "Cậu có skill nào liên quan đến testing không?"

---

## 🏗️ Xử lý sự cố (Troubleshooting)

### AI của tôi không nhận diện được skill

**Nguyên nhân có thể:**

1.  **Sai đường dẫn cài đặt**: Kiểm tra lại tài liệu của tool bạn dùng. Thử đường dẫn `.agent/skills/` xem sao.
2.  **Cần khởi động lại**: Thử tắt đi bật lại AI/IDE sau khi cài đặt.
3.  **Gõ sai tên**: Bạn có gõ `@brain-storming` thay vì `@brainstorming` không?

### Skill đưa ra lời khuyên sai hoặc lỗi thời

Làm ơn hãy [Báo lỗi (Open Issue)](https://github.com/sickn33/antigravity-awesome-skills/issues) giúp chúng tôi!
Nhớ ghi rõ:

- Skill nào bị lỗi
- Lỗi là gì
- Đáng lẽ nó phải làm gì

---

## 🤝 Đóng góp (Contribution)

### Tôi là người mới (newbie). Tôi đóng góp được không?

**Hoan nghênh nhiệt liệt!** Chúng tôi rất quý trọng các đóng góp từ người mới.

- Sửa lỗi chính tả
- Thêm ví dụ
- Cải thiện tài liệu
  Xem hướng dẫn tại [CONTRIBUTING.vi.md](CONTRIBUTING.vi.md) nhé.

### Tôi gửi PR nhưng bị trượt bài kiểm tra "Quality Bar". Tại sao?

Bản V3 có hệ thống kiểm tra chất lượng tự động. Skill của bạn có thể đang thiếu:

1.  Phần `description` (mô tả).
2.  Các ví dụ sử dụng mẫu.
    Hãy chạy `python3 scripts/validate_skills.py` trên máy để tự kiểm tra trước khi đẩy code lên nhé.

### Tôi có được sửa các skill "Official" không?

**Không.** Các skill Official (trong thư mục `skills/official/`) là bản sao (mirror) từ nhà cung cấp gốc. Nếu thấy lỗi, hãy mở Issue báo cáo thay vì sửa trực tiếp.

---

## 💡 Mẹo hay cho chuyên gia (Pro Tips)

- Luôn bắt đầu bằng `@brainstorming` trước khi xây dựng cái gì mới.
- Dùng `@systematic-debugging` khi bí bách vì bug.
- Thử `@test-driven-development` để code "xịn" hơn.
- Khám phá `@skill-creator` để tự tạo skill riêng cho mình.

**Vẫn còn thắc mắc?** [Vào đây thảo luận](https://github.com/sickn33/antigravity-awesome-skills/discussions) nhé, chúng tôi sẽ hỗ trợ hết mình! 🙌
