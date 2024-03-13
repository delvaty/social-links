import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CardProps = React.ComponentProps<typeof Card>;

export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <Card
        className={cn("w-[340px] py-4 my-3 border-none", className)}
        {...props}
        style={{ backgroundColor: "hsl(0, 0%, 12%)" }}
      >
        <CardHeader className="justify-center items-center">
          <Avatar className="h-[60px] w-[60px] mb-3">
            <AvatarImage src="/avatar-jessica.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle className="font-semibold text-2xl">
            Jessica Randall
          </CardTitle>
          <CardDescription className="text-lime-400 font-semibold text-xs">
            London, United Kingdom
          </CardDescription>
          <CardDescription className=" justify-center text-white text-xs items-center pt-4">
          &quot;Front-end developer and avid reader&quot;
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4 ">
          <Button className="hover:bg-lime-400 text-white bg-neutral-700 hover:text-black">
            GitHub
          </Button>
          <Button className="hover:bg-lime-400 text-white bg-neutral-700 hover:text-black">
            Frontend-Mentor
          </Button>
          <Button className="hover:bg-lime-400 text-white bg-neutral-700 hover:text-black">
            LinkedIn
          </Button>
          <Button className="hover:bg-lime-400 text-white bg-neutral-700 hover:text-black">
            Twitter
          </Button>
          <Button className="hover:bg-lime-400 text-white bg-neutral-700 hover:text-black">
            Instagram
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
