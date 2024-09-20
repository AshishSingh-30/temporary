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
  proposerpancard: z.string({
    required_error: "required",
  }),
  proposeraadharcard: z.string({
    required_error: "required",
  }),
  rccopy: z.string({
    required_error: "required",
  }),
  previouspolicycopy: z.string().optional(),
  inspectionreport: z.string().optional(),
  renewalnotice: z.string().optional(),
  proposalform: z.string().optional(),
  policycopy: z.string({
    required_error: "required",
  }),
  chequecopy: z.string().optional(),
  gstdocuemnt: z.string().optional(),
  permitcopy: z.string().optional(),
});

const UploadDoc = () => {
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
        <div className="lg:p-4 md:p-3 p-2 rounded-ss-md rounded-se-md bg-gradient-to-r from-[#b27f4f] to-[#360165]">
          <h2 className="drop-shadow text-white lg:text-2xl md:text-xl text-lg font-semibold">
            Upload Documents
          </h2>
          <p className="text-white">
            <span className="text-xs lg:text-sm">
              Add or make changes to your <b>Uplaod</b> here.
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
              <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-1.5">
                <FormField
                  control={form.control}
                  name="proposerpancard"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Proposer Pancard:{" "}
                        <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="proposeraadharcard"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Proposer Aadharcard:{" "}
                        <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rccopy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        RC Copy: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="previouspolicycopy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Policy Copy: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="inspectionreport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inspection Report: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="renewalnotice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Renewal Notice: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="proposalform"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proposal Form: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="policycopy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Policy Copy: <span className="text-red-600"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="chequecopy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cheque copy: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gstdocuemnt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GST Documents: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="permitcopy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Permit Copy: </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf"
                          {...field}
                          className={`${isDarkMode ? "bg-gray-300" : ""}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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

export default UploadDoc;
