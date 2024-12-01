import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const CharacterDetail: React.FC<CharacterProps> = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => {
  return (
    <div className="p-8 flex flex-col items-center space-y-6">
      <Card className="w-full max-w-3xl">
        <CardHeader className="flex items-center space-x-4">
        <Image
            src={image}
            alt={name}
            width={192}
            height={192}
            className="rounded-md shadow-md object-cover"
          />
          <div>
            <CardTitle className="text-3xl font-bold">{name}</CardTitle>
            <CardDescription className="text-gray-600">ID: {id}</CardDescription>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-6">
          <div className="flex space-x-4">
            <Badge variant="outline">Status: {status}</Badge>
            <Badge variant="outline">Species: {species}</Badge>
            <Badge variant="outline">Gender: {gender}</Badge>
            {type && <Badge variant="outline">Type: {type}</Badge>}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Origin</h3>
            <p>{origin.name}</p>
            <a
              href={origin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Origin
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p>{location.name}</p>
            <a
              href={location.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Location
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Episodes</h3>
            <ul className="list-disc list-inside space-y-2">
              {episode.map((ep, index) => (
                <li key={index}>
                  <a
                    href={ep}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Episode {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray-600">Created: {new Date(created).toLocaleDateString()}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Character
            </a>
          </div>
        </CardContent>
      </Card>
      <Link href="/">
        <Button variant="outline" className="mt-4">
          ←  Back to Characters
        </Button>
      </Link>
    </div>
  );
};

export default CharacterDetail;
