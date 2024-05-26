-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2024 at 01:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vdt`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240519045722-create-student.js'),
('20240519050141-remove_createdAt_updatedAt_from_Student.js'),
('20240519053418-set_default_null_for_gender_and_school_columns.js');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `school` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `gender`, `school`) VALUES
(4, 'Lê Minh Việt Anh', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(5, 'Phạm Quang Bách', 'Nam', 'VinUniversity'),
(6, 'Hoàng Bá Bảo', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(7, 'Phạm Minh Cường', 'Nam', 'Đại học Công nghệ - Đại học Quốc gia Hà Nội'),
(8, 'Trương Văn Độ', 'Nam', 'Đại học Công nghệ - Đại học Quốc gia Hà Nội'),
(9, 'Hoàng Việt Dũng', 'Nam', 'ITMO University'),
(10, 'Bùi Hoàng Dũng', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(11, 'Bùi Trọng Dũng', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(12, 'Trần Thùy Dương', 'Nữ', 'Đại học Công nghệ - Đại học Quốc gia Hà Nội'),
(13, 'Quach Dang Giang', 'Nam', 'Đại học Công nghệ Thông tin – Đại học Quốc gia TP.HCM'),
(14, 'Nguyễn Thanh Hà', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(15, 'Nguyễn Thu Hà', 'Nữ', 'Đại học Bách Khoa Hà Nội'),
(16, 'Cù Xuân Hải', 'Nam', 'ITMO University'),
(17, 'Nguyễn Trung Hiếu', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(18, 'Đặng Việt Hoàng', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(19, 'Nguyễn Văn Hùng', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(20, 'Nguyễn Quốc Hưng', 'Nam', 'Đại học Bách Khoa Hà Nội'),
(21, 'Lê Minh Hương', 'Nữ', 'Đại học Công nghệ - Đại học Quốc gia Hà Nội'),
(22, 'Ngo Dang Huy', 'Nam', 'Đại học Công nghệ - Đại học Quốc gia Hà Nội'),
(23, 'Trần Quang Huy', 'Nam', 'Học viện Công Nghệ Bưu Chính Viễn Thông'),
(24, 'Trần Minh Huyền', 'Nữ', 'Đại học Bách Khoa Hà Nội'),
(25, 'Nguyễn Đôn Thế Kiệt', 'Nam', 'VinUniversity'),
(26, 'Lê Hoàng Trường', 'Nam', 'ITMO University'),
(27, 'Đào Quang Lợi', 'Nam', 'Đại học Bách Khoa Hà Nội');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;