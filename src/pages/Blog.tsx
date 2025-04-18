import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://czrzkrlkqywcczazeopo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cnprcmxrcXl3Y2N6YXplb3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Mjk2MTksImV4cCI6MjA2MDAwNTYxOX0.WojC6BIUIjCuQQj-5zpzI8s_pUZNn5HvKPG4OlD4jXM";

export const supabase = createClient(supabaseUrl, supabaseKey);

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  author: string;
  categories: string | string[];
  slug: string;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, date, read_time, author, categories, slug")
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error.message);
      } else {
        console.log("Fetched posts:", data); // 👈 Debug output
        setBlogPosts(data || []);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PageLayout>
      <div className="page-container">
        <h1 className="page-title">My Blog</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Welcome to my blog! Here, I share my thoughts, experiences, and
          knowledge on various topics related to web development and more.
        </p>

        {blogPosts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts found.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => {
              const categories = Array.isArray(post.categories)
                ? post.categories
                : post.categories
                ? post.categories
                    .replace(/[{}"]/g, "")
                    .split(",")
                    .map((cat) => cat.trim())
                : [];

              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="no-underline"
                >
                  <Card className="h-full hover:shadow-md transition-shadow border">
                    <CardHeader>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {categories.map((category) => (
                            <Badge key={category} variant="outline">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.read_time}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Blog;
