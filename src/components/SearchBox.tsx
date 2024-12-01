import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function SearchBox({ search }: { search?: string }) {
  return (
    <header className="sticky mb-5 top-0 left-0 w-full bg-emerald-700 shadow-md z-50">
      <div className="container mx-auto p-4 flex justify-between items-center space-x-4">
        {/* Logo and Title */}
        <Card className="flex items-center bg-transparent shadow-none">
          <CardHeader className="flex flex-row items-center space-x-3 p-0">
            <Image
              src="/person-logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-md"
            />
            <CardTitle className="text-2xl font-bold text-white">CARMONA</CardTitle>
          </CardHeader>
        </Card>

        {/* Search Input and Button */}
        <div className="flex items-center space-x-2 w-full max-w-lg">
          <Input
            type="text"
            placeholder="Search..."
            className="bg-white text-black border-gray-300 focus:outline-none"
            value={search}
          />
          <Button variant="default" className="bg-white text-emerald-700 hover:bg-gray-100">
            Pesquisar
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SearchBox;
