import { useEffect } from 'react';

import { TypeTransferListResponse } from '@/src/types/transfer';
import { formatTransferDate } from '@/src/utils/formatTransferDate';

type FilterTransfersProps = {
	transferList?: TypeTransferListResponse[];
	search: string;
	filter: 'payeer' | 'value';
	filterDate: Date | null;
	setTransferListToShow: (transferList: TypeTransferListResponse[]) => void;
};

export const useFilterTransfers = ({
	transferList,
	search,
	filter,
	filterDate,
	setTransferListToShow,
}: FilterTransfersProps) => {
	useEffect(() => {
		const handleFilter = () => {
			let result = transferList;

			if (!result) return;

			if (search) {
				if (filter === 'payeer') {
					result = result.filter((item) =>
						item.payeer.name.toLowerCase().includes(search.toLowerCase()),
					);
				} else if (filter === 'value') {
					result = result.filter((item) =>
						item.value.toString().includes(search),
					);
				}
			}

			if (filterDate) {
				const dateFormatted = formatTransferDate(filterDate);

				result = result.filter((item) => item.date === dateFormatted);
			}

			setTransferListToShow(result);
		};

		handleFilter();
	}, [transferList, search, filter, filterDate]);
};
