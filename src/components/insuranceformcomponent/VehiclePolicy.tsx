import { Card, CardContent } from "@/components/ui/card";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { updatePersonalDetailsAsync } from "../profileSlice/profileSlice";
import { RootState } from "@/app/store";
import toast from "react-hot-toast";
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

const FormSchema = z.object({
  vehiclemake: z.string({
    required_error: "required",
  }),
  vehiclemodel: z.string({
    required_error: "required",
  }),
  fueltype: z.string({
    required_error: "required",
  }),
  vertical: z.string({
    required_error: "required",
  }),
  vehiclesubmodel: z.string().optional(),
  seatingcapacity: z.string().optional(),
  cc: z.string().optional(),
  cngfitted: z.string().optional(),
  registrationno: z.string({
    required_error: "required",
  }),
  rto: z.string({
    required_error: "Please select rto",
  }),
  mfgdate: z.string().optional(),
  regdate: z.string({
    required_error: "required",
  }),
  agevehicle: z.string().optional(),
  engineno: z.string().optional(),
  classicno: z.string().optional(),
  ownership: z.string({
    required_error: "required",
  }),
  insurername: z.string({
    required_error: "Please select a name",
  }),
  policybookedloc: z.string().optional(),
  portaluserid: z.string({
    required_error: "required",
  }),
  productname: z.string({
    required_error: "required",
  }),
  netliability: z.string({
    required_error: "required",
  }),
  liabilitygst: z.string({
    required_error: "required",
  }),
  liabiltypremium: z.string().optional(),
  otherliabilitypremium: z.string().optional(),
  pacover: z.string().optional(),

  premiumwithoutgst: z.string().optional(),
  totalgstamount: z.string({
    required_error: "required",
  }),
  totalpremium: z.string().optional(),
  hypothecation: z.string().optional(),
  deprecation: z.string().optional(),
});

const VehiclePolicy = () => {
  const dispatch = useDispatch<any>();

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
        <div className="lg:p-4 md:p-3 p-2 rounded-ss-md rounded-se-md  bg-gradient-to-r from-[#498f7d] to-[#00335e]">
          <h2 className="drop-shadow text-white lg:text-2xl md:text-xl text-lg font-semibold">
            Vehicle & Policy Details
          </h2>
          <p className="text-white">
            <span className="text-xs lg:text-sm">
              Add or make changes to your <b>Vehicle</b> here.
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
              <div className="my-4 pt-6 px-4 pb-4 rounded-lg relative border border-solid border-[#d1d1d1] shadow-inner-custom">
                <h3 className="absolute top-[-15px] bg-[#4ab0fd] text-[0.9rem] p-[0.3rem] rounded-sm shadow-md">
                  Vehicle Details
                </h3>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-1.5">
                  <FormField
                    control={form.control}
                    name="vehiclemake"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Vehicle Make: <span className="text-red-600"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="xyz" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehiclemodel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Vehicle Model:{" "}
                          <span className="text-red-600"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fueltype"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Fuel Type: <span className="text-red-600"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehiclesubmodel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Sub Model: </FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="seatingcapacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Seating Capacity: </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            max={8}
                            placeholder=""
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CC: </FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cngfitted"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CNG Fitted: </FormLabel>
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
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="Yes">Yes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="registrationno"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Registration No:{" "}
                          <span className="text-red-600"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="AtVN2637"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          RTO: <span className="text-red-600"> *</span>
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
                            <SelectItem value="Davangre">Davangre</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mfgdate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Mfg: </FormLabel>
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
                  <FormField
                    control={form.control}
                    name="regdate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Registraion of Date:{" "}
                          <span className="text-red-600"> *</span>
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
                    name="agevehicle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age of Vehicle: </FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="engineno"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Engine Number: </FormLabel>
                        <FormControl>
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="classicno"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Classic Number: </FormLabel>
                        <FormControl>
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ownership"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Has the vehicle ownership been changed in last 12
                          Months? <span className="text-red-600"> *</span>
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
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="Yes">Yes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <hr className="bg-gray-800" />
              <div className="my-4 pt-6 px-4 pb-4 rounded-lg relative border border-solid border-[#d1d1d1] shadow-inner-custom">
                <h3 className="absolute top-[-15px] bg-[#fd4ac7] text-[0.9rem] p-[0.3rem] rounded-sm shadow-md">
                  Policy Details
                </h3>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-1.5">
                  <FormField
                    control={form.control}
                    name="insurername"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Insurer Name: <span className="text-red-600"> *</span>
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
                            <SelectItem value="Actify PVT LTD">
                              Actify PVT LTD
                            </SelectItem>
                            <SelectItem value="TCS">TCS</SelectItem>
                            <SelectItem value="Infosys">Infosys</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="policybookedloc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Policy Booked Loctaion: </FormLabel>
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
                            <SelectItem value="Hubliy">Hubliy</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="portaluserid"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Portal UserId:{" "}
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
                            <SelectItem value="1256AADFG">1256AADFG</SelectItem>
                            <SelectItem value="1452RETRCV">
                              1452RETRCV
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Product Name: <span className="text-red-600"> *</span>
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
                            <SelectItem value="HR">HR</SelectItem>
                            <SelectItem value="CMS">CMS</SelectItem>
                            <SelectItem value="ERP">ERP</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="netliability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Net Liabaility Premium:{" "}
                          <span className="text-red-600"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liabilitygst"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Liability GST Rate(%):{" "}
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
                            <SelectItem value="More Than 18%">
                              More Than 18%
                            </SelectItem>
                            <SelectItem value="Less Than 18%">
                              Less Than 18%
                            </SelectItem>
                            <SelectItem value="18%">18%</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liabiltypremium"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Liability Premium: </FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherliabilitypremium"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Other Liability Premimum: </FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pacover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PA Cover: </FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="premiumwithoutgst"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Premium without GST: </FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="totalgstamount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Total GST Amount:{" "}
                          <span className="text-red-600"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="totalpremium"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Premium: </FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hypothecation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hypothecation: </FormLabel>
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
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="Yes">Yes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="deprecation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Deprecation </FormLabel>
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
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="Yes">Yes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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

export default VehiclePolicy;
