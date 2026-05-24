import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useFetch from "@/hooks/use-fetch";
import { addNewCompany } from "@/api/apiCompanies";
import { BarLoader } from "react-spinners";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
  logo: z.any().optional(),
});

const AddCompanyDrawer = ({ fetchCompanies, onCompanyAdded }) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingAddCompany,
    error: errorAddCompany,
    fn: fnAddCompany,
  } = useFetch(addNewCompany);

  const onSubmit = async (data) => {
    const companyData = {
      name: data.name,
      logo: data.logo && data.logo.length ? data.logo[0] : undefined,
    };

    const result = await fnAddCompany(companyData);
    if (result && fetchCompanies) {
      fetchCompanies();
      if (onCompanyAdded && result?.[0]) {
        onCompanyAdded(result[0]);
      }
      reset();
      setOpen(false);
    }
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button type="button" size="sm" variant="secondary">
          Add Company
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add a New Company</DrawerTitle>
        </DrawerHeader>
        <form className="flex flex-col gap-3 p-4 pb-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row items-end gap-2">
            <Input placeholder="Company name" {...register("name")} className="flex-1" />

            <label className="flex h-10 min-w-40 cursor-pointer items-center justify-center rounded-md border border-input bg-background px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              <span>Choose Logo</span>
              <input
                type="file"
                accept="image/*"
                {...register("logo")}
                className="hidden"
              />
            </label>

            <Button type="submit" variant="destructive" className="h-10 whitespace-nowrap">
              Add
            </Button>
          </div>
        </form>
        <DrawerFooter>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          {errorAddCompany?.message && (
            <p className="text-red-500">{errorAddCompany?.message}</p>
          )}
          {loadingAddCompany && (
            <div className="w-full">
              <BarLoader color="#36d7b7" cssOverride={{ width: "100%" }} height={6} />
            </div>
          )}
          <DrawerClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddCompanyDrawer;