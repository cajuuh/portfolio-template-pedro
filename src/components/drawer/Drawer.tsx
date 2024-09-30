import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,

  DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerComp() {


  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        test
      </DrawerContent>
    </Drawer>
  );
}
