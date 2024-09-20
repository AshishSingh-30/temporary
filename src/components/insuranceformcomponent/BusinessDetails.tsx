import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updatePersonalDetailsAsync } from "../profileSlice/profileSlice";
import { RootState } from "@/app/store";
import toast from "react-hot-toast";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

type Inputs = {
  first_name: string;
  middle_name: string;
  last_name: string;
  email_id: string;
  phone_number: string;
  presentAddress1: string;
  pinCode: number;
  country: string;
  state: string;
  city: string;
  current_annual_salary: number;
  expected_annual_salary: number;
  notice_period: number;
  short_term_project: string;
  dual_role: string;
  number_of_project: number;
  office: boolean;
  remote: boolean;
  hybrid: boolean;
  spoken_english: number;
  written_english: number;
  presentation_skill: number;
};

type PosCode = {
  value: string;
  label: string;
  sales_name: string;
  zm_name: string;
  nh_name: string;
  dm_name: string;
  vertical: string;
};

const posCodeData: PosCode[] = [
  {
    value: "POSLGO2520",
    label: "POSLGO2520",
    sales_name: "John Doe",
    zm_name: "XYZ Mathew",
    nh_name: "EMILLY",
    dm_name: "Unkown",
    vertical: "Direct SW",
  },
  {
    value: "XYZKI92350",
    label: "XYZKI92350",
    sales_name: "Deepka Yadav",
    zm_name: "",
    nh_name: "AKash",
    dm_name: "Priyanka",
    vertical: "Direct SW",
  },
  {
    value: "SLKHS612718",
    label: "SLKHS612718",
    sales_name: "Akshay Kumar",
    zm_name: "XYZ Mathew",
    nh_name: "EMILLY",
    dm_name: "Unkown",
    vertical: "Direct SW",
  },
  {
    value: "HGSBA99823",
    label: "HGSBA99823",
    sales_name: "Ashish A Singh",
    zm_name: "abc",
    nh_name: "Hardik",
    dm_name: "Seema",
    vertical: "SW",
  },
  {
    value: "GASVD42518",
    label: "GASVD42518",
    sales_name: "Juliee",
    zm_name: "XYZ Mathew",
    nh_name: "Saif Shaikh",
    dm_name: "Dinesh sir",
    vertical: "Direct SW",
  },
];

const FormSchema = z.object({
  businesstype: z.string({
    required_error: "Please select business type",
  }),
  subbusinesstype: z.string({
    required_error: "Please select sub-business type",
  }),
  producttype: z.string().optional(),
  vertical: z.string({
    required_error: "required",
  }),
  salesbranch: z.string({
    required_error: "Please select sales branch",
  }),
  salessubbranch: z.string().optional(),
  sourceby: z.string({
    required_error: "required",
  }),
  rmcode: z.string().min(6, {
    message: "RM Code require 6 digits.",
  }),
  rmname: z.string().min(2, {
    message: "RM Name must be at least 2 characters.",
  }),
  Insurer: z.string({
    required_error: "Please select Insurer",
  }),
  reporteddate: z.string({
    required_error: "required",
  }),
  reportedmonth: z.string({
    required_error: "required",
  }),
  modeoflogin: z.string({
    required_error: "required",
  }),
  isfleet: z.string().optional(),
  vehicletype: z.string({
    required_error: "Please select a type",
  }),
  vehiclecategory: z.string({
    required_error: "Please select a type",
  }),
  subbusinesstypevehicle: z.string().optional(),
  poscode: z.string({
    required_error: "required",
  }),
});

const BusinessDetails = () => {
  const dispatch = useDispatch<any>();
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [posCode, setPosCode] = React.useState<PosCode | null>(null);

  const isDarkMode = useSelector((state) => state.global.isDarkMode);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div>
      <Card>
        <div className="lg:p-4 md:p-3 p-2 rounded-ss-md rounded-se-md  bg-gradient-to-r from-pink-500 to-indigo-500">
          <h2 className="drop-shadow text-white lg:text-2xl md:text-xl text-lg font-semibold">
            Business Details
          </h2>
          <p className="text-white">
            <span className="text-xs lg:text-sm">
              Add or make changes to your <b>Account</b> here.
            </span>
            <br className="sm:hidden my-1" />
            <span className=" bg-red-500 rounded-sm text-xs py-0.5 px-1 lg:text-sm">
              Click submit when you're done.
            </span>
          </p>
        </div>
        <CardContent className="p-[0.7rem_1rem]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full lg:gap-3 gap-1.5"
            >
              <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-3 gap-1.5">
                <FormField
                  control={form.control}
                  name="businesstype"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Business Type: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new">New Business</SelectItem>
                          <SelectItem value="old">Old Business</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subbusinesstype"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Sub Business Type:{" "}
                        <span className="text-red-600"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a sub-business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="usedrollover">
                            Used Rollover
                          </SelectItem>
                          <SelectItem value="rollover">Rollover</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="producttype"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Type: </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="liability">Liability</SelectItem>
                          <SelectItem value="xyz">xyz</SelectItem>
                          <SelectItem value="abc">abc</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vertical"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Vertical: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="directsw">Direct SW</SelectItem>
                          <SelectItem value="directxy">Driect XY</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salesbranch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Sales Barnch: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Branch" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Mumbai">Mumbai</SelectItem>
                          <SelectItem value="Karnatak">Karnatak</SelectItem>
                          <SelectItem value="Delhi">Delhi</SelectItem>
                          <SelectItem value="Goa">Goa</SelectItem>
                          <SelectItem value="Pune">Pune</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salessubbranch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sales Sub-Branch: </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Thane">Thane</SelectItem>
                          <SelectItem value="Kalyan">Kalyan</SelectItem>
                          <SelectItem value="Mumbai CST">Mumbai CST</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sourceby"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Source By: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="POS">POS</SelectItem>
                          <SelectItem value="Machine">Machine</SelectItem>
                          <SelectItem value="Test">Test</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rmcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        RM Code: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rmname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        RM Name: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="john" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Insurer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Insurer: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a insurer" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Magma HDI">Magma HDI</SelectItem>
                          <SelectItem value="General Institute">
                            General Institute
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reporteddate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Reported Date: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          className={`${isDarkMode ? "bg-slate-700" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reportedmonth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Reported Month: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="month"
                          {...field}
                          className={`${isDarkMode ? "bg-slate-700" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <hr className="bg-gray-800" />
              <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-1.5">
                <div className="flex flex-col gap-0.5">
                  <div>
                    <Label>Tracker Number: </Label>
                    <p className="font-bold bg-yellow-300 py-1 px-3 w-fit">
                      MTL/BG3/1291/XYZ0000123
                    </p>
                  </div>
                  <FormField
                    control={form.control}
                    name="isfleet"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormLabel className="mt-1">Is Fleet Case?</FormLabel>
                        <FormControl>
                          <Input type="checkbox" {...field} className="w-fit" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="modeoflogin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Mode of Login: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="offline">Offline</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-4 pt-6 px-4 pb-4 rounded-lg relative border border-solid border-[#d1d1d1] shadow-inner-custom">
                <h3 className="absolute top-[-15px] bg-gray-300 text-[0.9rem] p-[0.3rem] rounded-sm shadow-md">
                  Proposal Details
                </h3>
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3 gap-1.5">
                  <FormField
                    control={form.control}
                    name="vehicletype"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Vehicle Type: <span className="text-red-600"> *</span>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Miscellaneous">
                              Miscellaneous
                            </SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehiclecategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Vehicle Category:{" "}
                          <span className="text-red-600"> *</span>
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="MISC-D-Tractor">
                              MISC-D-Tractor
                            </SelectItem>
                            <SelectItem value="Others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subbusinesstypevehicle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sub Business Type: </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a sub-business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="usedrollover">
                              Used Rollover
                            </SelectItem>
                            <SelectItem value="rollover">Rollover</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="my-4 pt-6 px-4 pb-4 rounded-lg relative border border-solid border-[#d1d1d1] shadow-inner-custom">
                <h3 className="absolute top-[-15px] bg-gray-300 text-[0.9rem] p-[0.3rem] rounded-sm shadow-md">
                  Sales Details
                </h3>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-1.5">
                  <div>
                    <FormField
                      control={form.control}
                      name="poscode"
                      render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                          <FormLabel>
                            POS Code: <span className="text-red-600"> *</span>
                          </FormLabel>
                          <FormControl>
                            {isDesktop ? (
                              <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                  >
                                    {posCode ? (
                                      <>{posCode.label}</>
                                    ) : (
                                      <>BSJ0XXXX</>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-full p-0"
                                  align="start"
                                >
                                  <PosCodeList
                                    setOpen={setOpen}
                                    setPosCode={setPosCode}
                                  />
                                </PopoverContent>
                              </Popover>
                            ) : (
                              <Drawer open={open} onOpenChange={setOpen}>
                                <DrawerTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                  >
                                    {posCode ? (
                                      <>{posCode.label}</>
                                    ) : (
                                      <>BSJ0XXXX</>
                                    )}
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="mt-4 border-t p-1.5 max-h-[40vh]">
                                    <ScrollArea />
                                    <PosCodeList
                                      setOpen={setOpen}
                                      setPosCode={setPosCode}
                                    />
                                  </div>
                                </DrawerContent>
                              </Drawer>
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <h5 className="my-1 text-blue-800">
                      {posCode?.sales_name}
                    </h5>
                  </div>
                  {posCode && (
                    <div
                      className={`${
                        isDarkMode ? "bg-blue-200" : "bg-yellow-200"
                      } p-3 rounded mt-2 md:mt-0`}
                    >
                      <div>
                        <Label>ZM Name:</Label>
                        <span className="px-1">{posCode?.zm_name}</span>
                      </div>
                      <div>
                        <Label>NH Name:</Label>
                        <span className="px-1">{posCode?.nh_name}</span>
                      </div>
                      <div>
                        <Label>DM Name:</Label>
                        <span className="px-1">{posCode?.dm_name}</span>
                      </div>
                      <div>
                        <Label>Vertical:</Label>
                        <span className="px-1">{posCode?.vertical}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-fit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

function PosCodeList({
  setOpen,
  setPosCode,
}: {
  setOpen: (open: boolean) => void;
  setPosCode: (posCode: PosCode | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter posCode..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {posCodeData.map((posCode) => (
            <CommandItem
              key={posCode.value}
              value={posCode.value}
              onSelect={(value) => {
                setPosCode(
                  posCodeData.find((priority) => priority.value === value) ||
                    null
                );
                setOpen(false);
              }}
            >
              {posCode.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default BusinessDetails;
