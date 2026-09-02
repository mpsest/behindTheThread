INSERT INTO users (name, email, password, user_type, created_at, updated_at)
VALUES (
    'Admin',
    'admin@admin.com',
    '$2y$12$E4pUueKvpe69eU1sl.nHSuI9feQb49at9QkpEoE5QQS/KrAKhj722',
    1,
    NOW(),
    NOW()
);


INSERT INTO users (name, email, password, user_type, created_at, updated_at)
VALUES (
    'user1',
    'user@user.com',
    '$2y$12$E4pUueKvpe69eU1sl.nHSuI9feQb49at9QkpEoE5QQS/KrAKhj722',
    2,
    NOW(),
    NOW()
);
