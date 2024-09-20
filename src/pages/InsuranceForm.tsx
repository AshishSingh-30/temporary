import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BusinessDetails from "@/components/insuranceformcomponent/BusinessDetails";
import VehiclePolicy from "@/components/insuranceformcomponent/VehiclePolicy";
import UploadDoc from "@/components/insuranceformcomponent/UploadDoc";
import { useSelector } from "react-redux";

const InsuranceForm = () => {
  const isDarkMode = useSelector((state) => state.global.isDarkMode);

  return (
    <>
      <Tabs defaultValue="business">
        <TabsList className={`${!isDarkMode && "bg-[#e2e0e0]"}`}>
          <TabsTrigger className="text-xs  sm:text-sm" value="business">
            Business Details
          </TabsTrigger>
          <TabsTrigger className="text-xs  sm:text-sm" value="vehiclepolicy">
            Vehicle & Policy
          </TabsTrigger>
          <TabsTrigger className="text-xs  sm:text-sm" value="upload">
            Upload
          </TabsTrigger>
        </TabsList>
        <TabsContent value="business">
          <BusinessDetails />
        </TabsContent>
        <TabsContent value="vehiclepolicy">
          <VehiclePolicy />
        </TabsContent>
        <TabsContent value="upload">
          <UploadDoc />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default InsuranceForm;
