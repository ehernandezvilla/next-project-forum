'use client';

import { useEffect, useState } from "react";
import Button from "@/components/button/Button";
import { capitalize, fetchPostByTopic, Post } from "@/lib/utils";

export default function TopicsPage({ params }: { params: { topicId: string } }) {
    const topicId = params.topicId;
    const [topicPosts, setTopicPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetchPostByTopic(topicId)
            .then((fetchedPosts) => {
                setTopicPosts(fetchedPosts);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setError("Failed to fetch posts");
                setLoading(false);
            });
    }, [topicId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{capitalize(topicId)}</h1>
            <ul>
                {topicPosts.map((post) => (
                    <li key={post.id}>
                        <Button
                            href={`/questions/${post.id}`}
                            label={post.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
