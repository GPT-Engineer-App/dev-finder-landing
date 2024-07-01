import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">DevRecruit</h1>
          <nav>
            <Button variant="outline" className="mr-4">Login</Button>
            <Button>Sign Up</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Connecting Top Developers with Leading Companies</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">Join our network and take the next step in your career.</p>

        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>Sign up to find your dream job</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="********" />
              </div>
              <Button type="submit" className="w-full">Sign Up</Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Separator className="my-12" />

      <footer className="w-full bg-white shadow">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <p className="text-gray-600">&copy; 2023 DevRecruit. All rights reserved.</p>
          <nav>
            <Button variant="link" className="mr-4">Privacy Policy</Button>
            <Button variant="link">Terms of Service</Button>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;