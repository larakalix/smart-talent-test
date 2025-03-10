import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadProvider } from "../../../providers/load-provider";
import { useOrderForm } from "./hooks/use-order-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    type FormFields,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";
import { Button } from "@acme/ui/components";
import { orderFormSchema, OrderFormValues } from "../../../types/order";
import { CartSummary } from "../../cart/summary";

export const OrderForm = () => {
    const { countries, isLoading, error, user, onSubmit } = useOrderForm();

    const form = useForm<OrderFormValues>({
        resolver: zodResolver(orderFormSchema),
        defaultValues: {
            name: user?.name ?? "",
            email: user?.email ?? "",
            address: "",
            country: "",
        },
    });

    const fields: FormFields[] = [
        { name: "name", label: "Name", placeholder: "John Doe" },
        {
            name: "email",
            label: "Email",
            placeholder: "jdoe@email.com",
        },
        {
            name: "address",
            label: "Address",
            placeholder: "123 Main St",
        },
    ];

    return (
        <LoadProvider isLoading={isLoading} error={error}>
            <Form {...form}>
                <form
                    className="w-full flex flex-col gap-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fields.map(({ name, label, placeholder }) => (
                            <FormField
                                key={`form-field-${name}`}
                                control={form.control}
                                name={name as keyof OrderFormValues}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="capitalize">
                                            {label}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className="mt-1 w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                                                placeholder={placeholder}
                                            />
                                        </FormControl>

                                        <FormMessage className="font-medium mt-2 text-sm text-red-600 dark:text-red-500" />
                                    </FormItem>
                                )}
                            />
                        ))}

                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize">
                                        Country
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue
                                                    defaultValue={field.value}
                                                    placeholder="Select a country"
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {countries?.map((country) => (
                                                    <SelectItem
                                                        key={country.value}
                                                        value={country.value}
                                                    >
                                                        {country.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>

                                    <FormMessage className="font-medium mt-2 text-sm text-red-600 dark:text-red-500" />
                                </FormItem>
                            )}
                        />
                    </div>

                    <CartSummary />

                    <Button
                        className="block rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600"
                        onClick={form.handleSubmit(onSubmit)}
                    >
                        Submit Order
                    </Button>
                </form>
            </Form>
        </LoadProvider>
    );
};
