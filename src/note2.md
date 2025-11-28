Phần 2: Merge / Push code nhánh phụ lên main an toàn

# 1️⃣ Kiểm tra nhánh hiện có

git branch # local
git branch -r # remote

# 2️⃣ Nếu nhánh phụ chưa có local, checkout từ remote

git checkout -b draft/gifted-shamir origin/draft/gifted-shamir

# 3️⃣ Chuyển về main

git checkout main

# 4️⃣ Tạo backup main (an toàn)

git branch backup-main

# 5️⃣ Merge nhánh phụ vào main (an toàn, giữ lịch sử)

git merge draft/gifted-shamir

# 6️⃣ Nếu có conflict:

# - Mở file, sửa conflict

git add .
git commit

# 7️⃣ Push main lên remote

git push origin main

✅ Tip:

Merge = giữ lịch sử main + thêm code nhánh phụ

Nếu muốn main y hệt nhánh phụ → dùng reset --hard
