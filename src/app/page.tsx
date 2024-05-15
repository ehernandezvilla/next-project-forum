"use client";
import React, { useEffect, useState } from "react";
import {
  getRandomElementsWithDelay,
  POSTS,
  USERS,
  Post,
  User,
} from "../lib/utils"; // Import relevant functions and types

import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [featuredUser, setFeaturedUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomElementsWithDelay(POSTS, 5).then((randomPosts) => {
      setFeaturedPosts(randomPosts);
    });
    getRandomElementsWithDelay(USERS, 1)
      .then((randomUsers) => {
        if (randomUsers.length > 0) {
          setFeaturedUser(randomUsers[0]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>Welcome To CodeyOverflow Forum</h1>
        <p>A question forum for the curious.</p>
      </header>
      <h2>Featured Posts</h2>
      {isLoading ? (
        <p>Loading featured posts...</p>
      ) : (
        <ul>
          {featuredPosts.map((post) => (
            <li key={post.id}>
              <Link href={`questions/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <h2>Featured User</h2>
      {isLoading ? (
        <p>Loading featured user...</p>
      ) : featuredUser ? (
        <div>
          <p>Username: {featuredUser.username}</p>
          <p>Name: {featuredUser.name}</p>
          <p>Email: {featuredUser.email}</p>
        </div>
      ) : (
        <p>No featured user available.</p>
      )}
    </>
  );
}
