CREATE DATABASE LMS;

CREATE extension "uuid-ossp";

CREATE table courses(
    course_id uuid not null default uuid_generate_v4() primary key,
    course_name varchar(255) not null,
    course_duration integer not null
);

CREATE table users(
    user_id uuid not null default uuid_generate_v4() primary key,
    user_name varchar(64) not null,
    user_phone varchar(64) not null,
    user_parents varchar(64) not null,
    user_extra_number varchar(64) not null,
    user_photo text,
    user_created_at timestamp without time zone default current_timestamp not null,
    user_is_active boolean default true not null
);

CREATE table teachers(
    teacher_id uuid not null default uuid_generate_v4() primary key,
    teacher_name varchar(255) not null,
    teacher_phone varchar(32) not null
);

CREATE table groups(
    group_id uuid not null default uuid_generate_v4() primary key,
    corse_name varchar(255) not null,
    group_is_odd boolean not null,
    group_teacher uuid not null,
    teacher_id uuid not null,
    foreign key(teacher_id)
     references teachers(teacher_id) on delete set null
);

CREATE table user_groups(
    gu_id uuid not null default uuid_generate_v4() primary key,
    user_id uuid not null,
    group_id uuid not null,
    foreign key(user_id)
     references users(user_id) on delete set null,
     foreign key(group_id)
     references groups(group_id) on delete set null 
);